import type { ImageMetadata } from 'astro';
import tkaBanner from '../assets/program-tka.webp';
import utbkBanner from '../assets/program-utbk.webp';

export interface Program {
  id: 'tka' | 'utbk';
  title: string;
  tagline: string;
  description: string;
  labelClass: string;
  banner: ImageMetadata;
}

const LOREM =
  'lorem ipsum dolor sit amet consectetur adipiscing elit est occaecat tempor cumque voluptas aute omnis nobis quis ullamco magna distinctio aut cum officia mollitia iusto mollitia dolorem est sunt sed animi id consequat laboris amet do dolores eiusmod cupiditate eu aute qui';

export const PROGRAMS: Program[] = [
  {
    id: 'tka',
    title: 'PROGRAM TKA',
    tagline: '“Aku Siap Bantai TKA”',
    description: LOREM,
    labelClass: 'bg-program-tka',
    banner: tkaBanner,
  },
  {
    id: 'utbk',
    title: 'PROGRAM UTBK',
    tagline: 'Aku Siap 700+ UTBK',
    description: LOREM,
    labelClass: 'bg-program-utbk',
    banner: utbkBanner,
  },
];

export interface MateriIcon {
  src: string;
  w: number;
  h: number;
  /** Tailwind positioning classes for the floating icon. */
  pos: string;
}

export interface MateriSection {
  /** Route param: /program/materi/<slug>. */
  slug: string;
  label: string;
  theme: string;
  icons: MateriIcon[];
}

export const MATERI_SECTIONS: MateriSection[] = [
  {
    slug: 'tka',
    label: 'TKA',
    theme: 'bg-brand',
    icons: [
      { src: '/icons/flask-white.svg', w: 54, h: 67, pos: 'left-[-3.5rem] top-[3.25rem] -rotate-[12deg] sm:left-[-5rem] sm:top-[5.5rem]' },
      { src: '/icons/coin-search-white.svg', w: 63, h: 63, pos: 'right-[-3rem] top-[-1.5rem] sm:right-[-7rem] sm:top-[-2.5rem]' },
    ],
  },
  {
    slug: 'utbk',
    label: 'UTBK',
    theme: 'bg-white',
    icons: [
      { src: '/icons/disc.svg', w: 67, h: 67, pos: 'right-[-3rem] top-[-2rem] sm:right-[-6rem] sm:top-[-3.5rem]' },
      { src: '/icons/pill.svg', w: 67, h: 67, pos: 'left-[-3.5rem] top-[3.25rem] -rotate-[12deg] sm:left-[-6rem] sm:top-[5rem]' },
    ],
  },
];
