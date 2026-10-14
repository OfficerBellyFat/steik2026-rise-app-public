export interface Summary {
  n: number;
  min: number;
  max: number;
  mean: number;
  median: number;
}

/** Descriptive statistics for a list of scores (input need not be sorted). */
export function summarize(values: readonly number[]): Summary {
  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  if (n === 0) return { n: 0, min: 0, max: 0, mean: 0, median: 0 };
  const mean = sorted.reduce((sum, v) => sum + v, 0) / n;
  const mid = Math.floor(n / 2);
  const median = n % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  return { n, min: sorted[0], max: sorted[n - 1], mean, median };
}

export const fmt = (v: number) => v.toFixed(2);
