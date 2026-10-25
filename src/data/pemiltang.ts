import cherylViby from '../assets/pemiltang/cheryl-viby.png';
import muchsinEdo from '../assets/pemiltang/muchsin-edo.png';

/**
 * PREVIEW ONLY. This is a static site with no server or database, so the page
 * cannot check PINs, enforce one vote per person, or count votes. While this is
 * true the page shows a visible "pratinjau" banner on every screen. Flip it to
 * false only once the page is wired to a real voting backend.
 */
export const PREVIEW_MODE = true;

export type Candidate = {
  id: string;
  name: string;
  photo: ImageMetadata;
  /** Where the cut-out sits inside the card, as % of the card (from the Figma frame). */
  box: { left: number; top: number; width: number; height: number };
  /** The photo's own offset inside that box, as % of the box (from the Figma crop). */
  crop: { left: number; top: number; width: number; height: number };
};

export const CANDIDATES: Candidate[] = [
  {
    id: 'cheryl-viby',
    name: 'Cheryl Viby',
    photo: cherylViby,
    box: { left: 13.6, top: 13.65, width: 78, height: 70.5 },
    crop: { left: -1.19, top: -25.82, width: 101.19, height: 140.28 },
  },
  {
    id: 'muchsin-edo',
    name: 'Muchsin Edo',
    photo: muchsinEdo,
    box: { left: 12.2, top: 8.5, width: 75.8, height: 73.6 },
    crop: { left: -26.15, top: -51.28, width: 149.63, height: 192.31 },
  },
];

/**
 * Vote counts for the "Rekapitulasi suara" screen, keyed by candidate id.
 * Leave null until real results exist: the screen then shows dashes instead of numbers.
 */
export const RESULTS: Record<string, number> | null = null;
