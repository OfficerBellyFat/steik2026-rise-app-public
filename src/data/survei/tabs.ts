import { UTBK_SNBT, UTBK_SSU, RAPOR } from './raw';
import { PRESTASI_SNBP } from './prestasi';

export interface SurveiTab {
  id: 'snbt' | 'ssu' | 'rapor' | 'prestasi';
  label: string;
  /** Compact label used where the full one would wrap (the homepage shortcut). */
  shortLabel: string;
  /** Respondent tally, shown as a badge next to the label. */
  count: number;
}

// Rapor counts every jalur entry rather than distinct people — the columns in
// raw.ts are sorted independently, so the same student can appear under several
// jalur. This mirrors the `total` RaporPanel computes and renders.
const raporTotal = Object.values(RAPOR).reduce((n, v) => n + v.length, 0);

export const SURVEI_TABS: SurveiTab[] = [
  { id: 'snbt', label: 'Skor UTBK SNBT', shortLabel: 'SNBT', count: UTBK_SNBT.RATA.length },
  { id: 'ssu', label: 'Skor UTBK Jalur SSU', shortLabel: 'SSU', count: UTBK_SSU.RATA.length },
  { id: 'rapor', label: 'Nilai Rapor', shortLabel: 'Rapor', count: raporTotal },
  { id: 'prestasi', label: 'Prestasi SNBP', shortLabel: 'Prestasi', count: PRESTASI_SNBP.length },
];
