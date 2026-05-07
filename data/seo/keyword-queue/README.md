# Keyword Queue

CSV-driven backlog for the article generator. One file per product. The generator pops the next `pending` row, generates the article, and marks the row `done`.

## Schema

| Column | Required | Format | Notes |
|---|---|---|---|
| `status` | yes | `pending` \| `in_progress` \| `done` \| `skipped` | Generator transitions `pending` → `in_progress` → `done`. Set `skipped` manually to skip a row. |
| `primary_keyword` | yes | string | Main target keyword. Becomes the article's central focus. |
| `secondary_keywords` | recommended | pipe-separated | 2–5 supporting keywords in the cluster. |
| `tertiary_keywords` | optional | pipe-separated | 3–8 long-tail variations. |
| `search_volume` | optional | integer | Monthly volume from Semrush/Ahrefs. |
| `difficulty` | optional | integer 0–100 | Keyword Difficulty score. Target ≤ 30 per the SEO playbook. |
| `word_count` | optional | integer | Target length. Default 1500. |
| `slug` | auto | string | Filled in by generator after successful generation. |
| `generated_date` | auto | ISO date | Filled in by generator. |
| `notes` | optional | string | Free text. Quote with `"..."` if it contains commas. |

## Workflow

1. **Find a seed keyword** — from Google Search Console near-misses (positions 11–30), customer questions, or competitor analysis. Paid tools optional.
2. **Expand it into a cluster** automatically: `npm run expand-cluster -- --seed "<seed>" --product <id> --append` — this hits Google Autocomplete and writes a cluster row directly into the queue.
   - Or research manually in Semrush/Ahrefs and add the row by hand.
3. **Review** the appended row. The expander's secondary/tertiary picks are decent but not perfect — edit the cluster if you spot off-intent keywords or miss obvious ones.
4. **Generate**: `npm run generate-article -- --product <id> --from-queue`
   - Pops the oldest `pending` row
   - Marks it `in_progress`
   - Generates the article using the cluster as the keyword set
   - Marks the row `done` with slug + date on success, or reverts to `pending` on failure

## Sample row (anatomy)

```csv
pending,"tradie quoting app","quote builder australia|tradesman invoice app|construction quotes","carpenter quotes online|fence quote calculator|deck quote app",1900,28,1500,,,Cluster targets QM core SaaS keyword
```

## Tips

- Don't put more than ~10 `pending` rows in flight per product at once. Quality > volume.
- One article per cluster, not per keyword. A cluster of 8 keywords on one well-written page outperforms 8 thin pages.
- Keep `difficulty` honest. Easy to fudge and end up writing for keywords you'll never rank for.
- After generation, review the article. If you reject it, set `status=pending` again and edit the prompt or topic before retrying.
