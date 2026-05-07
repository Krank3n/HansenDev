// services/keyword-queue.ts
// CSV-driven keyword backlog. Pops next pending row, marks done after generation.

import * as fs from 'fs';
import * as path from 'path';
import { ProductId } from '../types/article';

export interface KeywordRow {
  status: 'pending' | 'in_progress' | 'done' | 'skipped';
  primary_keyword: string;
  secondary_keywords: string[];
  tertiary_keywords: string[];
  search_volume?: number;
  difficulty?: number;
  word_count?: number;
  slug?: string;
  generated_date?: string;
  notes?: string;
  // Internal: row index in the CSV (excluding header), for write-back.
  _rowIndex: number;
}

const COLUMNS = [
  'status',
  'primary_keyword',
  'secondary_keywords',
  'tertiary_keywords',
  'search_volume',
  'difficulty',
  'word_count',
  'slug',
  'generated_date',
  'notes',
] as const;

const queuePath = (productId: ProductId): string =>
  path.join(process.cwd(), 'data', 'seo', 'keyword-queue', `${productId}.csv`);

// Minimal RFC-4180-ish CSV parser. Handles quoted fields, embedded commas,
// and "" escapes inside quoted fields. Newlines inside quoted fields not supported.
const parseCsvLine = (line: string): string[] => {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;
  let i = 0;
  while (i < line.length) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i++;
        continue;
      }
      current += ch;
      i++;
    } else {
      if (ch === '"' && current === '') {
        inQuotes = true;
        i++;
        continue;
      }
      if (ch === ',') {
        fields.push(current);
        current = '';
        i++;
        continue;
      }
      current += ch;
      i++;
    }
  }
  fields.push(current);
  return fields;
};

const escapeCsvField = (value: string): string => {
  if (value.includes(',') || value.includes('"') || value.includes('\n')) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
};

const splitPipe = (value: string): string[] =>
  value.split('|').map(s => s.trim()).filter(s => s.length > 0);

const joinPipe = (values: string[]): string => values.join('|');

const parseRow = (fields: string[], rowIndex: number): KeywordRow => {
  const get = (name: typeof COLUMNS[number]): string => {
    const idx = COLUMNS.indexOf(name);
    return (fields[idx] ?? '').trim();
  };

  const status = (get('status') || 'pending') as KeywordRow['status'];
  const search_volume = get('search_volume');
  const difficulty = get('difficulty');
  const word_count = get('word_count');

  return {
    status,
    primary_keyword: get('primary_keyword'),
    secondary_keywords: splitPipe(get('secondary_keywords')),
    tertiary_keywords: splitPipe(get('tertiary_keywords')),
    search_volume: search_volume ? Number(search_volume) : undefined,
    difficulty: difficulty ? Number(difficulty) : undefined,
    word_count: word_count ? Number(word_count) : undefined,
    slug: get('slug') || undefined,
    generated_date: get('generated_date') || undefined,
    notes: get('notes') || undefined,
    _rowIndex: rowIndex,
  };
};

const serializeRow = (row: KeywordRow): string => {
  const fields = [
    row.status,
    row.primary_keyword,
    joinPipe(row.secondary_keywords),
    joinPipe(row.tertiary_keywords),
    row.search_volume?.toString() ?? '',
    row.difficulty?.toString() ?? '',
    row.word_count?.toString() ?? '',
    row.slug ?? '',
    row.generated_date ?? '',
    row.notes ?? '',
  ];
  return fields.map(escapeCsvField).join(',');
};

const readQueue = (productId: ProductId): { header: string; rows: KeywordRow[] } => {
  const filePath = queuePath(productId);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Keyword queue not found: ${filePath}`);
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').filter(line => line.length > 0);
  if (lines.length === 0) {
    throw new Error(`Keyword queue is empty: ${filePath}`);
  }
  const [header, ...dataLines] = lines;
  const rows = dataLines.map((line, i) => parseRow(parseCsvLine(line), i));
  return { header, rows };
};

const writeQueue = (productId: ProductId, header: string, rows: KeywordRow[]): void => {
  const filePath = queuePath(productId);
  const content = [header, ...rows.map(serializeRow)].join('\n') + '\n';
  fs.writeFileSync(filePath, content, 'utf-8');
};

export const popNextPending = (productId: ProductId): KeywordRow | null => {
  const { header, rows } = readQueue(productId);
  const next = rows.find(r => r.status === 'pending');
  if (!next) return null;
  next.status = 'in_progress';
  writeQueue(productId, header, rows);
  return next;
};

export const markDone = (
  productId: ProductId,
  rowIndex: number,
  slug: string,
  generatedDate: string
): void => {
  const { header, rows } = readQueue(productId);
  const row = rows[rowIndex];
  if (!row) {
    throw new Error(`Row index ${rowIndex} out of range for ${productId}`);
  }
  row.status = 'done';
  row.slug = slug;
  row.generated_date = generatedDate;
  writeQueue(productId, header, rows);
};

export const revertToPending = (productId: ProductId, rowIndex: number): void => {
  const { header, rows } = readQueue(productId);
  const row = rows[rowIndex];
  if (!row) return;
  row.status = 'pending';
  writeQueue(productId, header, rows);
};

export const formatClusterTopic = (row: KeywordRow): string => row.primary_keyword;

export const formatKeywordList = (row: KeywordRow): string[] => {
  const all = [row.primary_keyword, ...row.secondary_keywords, ...row.tertiary_keywords];
  return Array.from(new Set(all.filter(k => k.length > 0)));
};
