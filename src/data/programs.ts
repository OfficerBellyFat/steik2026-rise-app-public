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

const TKA_desc =
  'Pelajari materi TKA yang disusun ringkas dan mudah dipahami, lengkap dengan contoh soal dan pembahasan. Cocok untuk memperkuat dasar dan membangun kepercayaan diri sebelum hari ujian.';
const UTBK_desc =
  'Siapkan dirimu mengejar skor 700+ lewat materi UTBK yang terstruktur, latihan soal bertingkat, dan strategi pengerjaan. Fokus pada konsep penting agar belajarmu lebih efektif dan terarah.';

export const PROGRAMS: Program[] = [
  {
    id: 'tka',
    title: 'PROGRAM TKA',
    tagline: '“Aku Siap Bantai TKA”',
    description: TKA_desc,
    labelClass: 'bg-program-tka',
    banner: tkaBanner,
  },
  {
    id: 'utbk',
    title: 'PROGRAM UTBK',
    tagline: 'Aku Siap 700+ UTBK',
    description: UTBK_desc,
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
