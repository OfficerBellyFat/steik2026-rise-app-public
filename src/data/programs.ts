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
