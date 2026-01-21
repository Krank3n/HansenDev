// utils/logger.ts
// Colored console logging utility

import chalk from 'chalk';

export const logger = {
  info: (message: string, ...args: unknown[]) => {
    console.log(chalk.blue('ℹ'), chalk.blue(message), ...args);
  },

  success: (message: string, ...args: unknown[]) => {
    console.log(chalk.green('✓'), chalk.green(message), ...args);
  },

  warning: (message: string, ...args: unknown[]) => {
    console.log(chalk.yellow('⚠'), chalk.yellow(message), ...args);
  },

  error: (message: string, ...args: unknown[]) => {
    console.log(chalk.red('✗'), chalk.red(message), ...args);
  },

  step: (step: number, message: string) => {
    console.log(chalk.cyan(`[${step}]`), message);
  },

  divider: () => {
    console.log(chalk.gray('─'.repeat(50)));
  },

  header: (title: string) => {
    console.log('');
    console.log(chalk.bold.white(`═══ ${title} ═══`));
    console.log('');
  },

  keyValue: (key: string, value: string) => {
    console.log(chalk.gray(`  ${key}:`), chalk.white(value));
  },

  preview: (label: string, content: string, maxLength = 100) => {
    const truncated = content.length > maxLength
      ? content.substring(0, maxLength) + '...'
      : content;
    console.log(chalk.gray(`  ${label}:`), chalk.dim(truncated));
  },

  blank: () => {
    console.log('');
  }
};

export default logger;
