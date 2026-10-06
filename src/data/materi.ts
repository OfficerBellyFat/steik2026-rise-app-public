import { z } from 'astro/zod';

export const CATEGORIES = {
  tka: { label: 'TKA', class: 'bg-tag-blue' },
  utbk: { label: 'UTBK', class: 'bg-tag-orange' },
  umum: { label: 'Umum', class: 'bg-tag-pink' },
} as const;

const materiSchema = z.array(
  z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(Object.keys(CATEGORIES) as [keyof typeof CATEGORIES]),
    // Google Drive link. Optional while content is WIP; cards without a link render unclickable.
    href: z.url().optional(),
  }),
);

const LOREM = 'lorem ipsum dolor sit amet consectetur adipiscing elit est occaecat tempor cumque voluptas aute omnis nobis quis ullamco magna distinctio aut';

// Parsed at build time so a malformed URL fails the build instead of shipping a dead link.
export const MATERI = materiSchema.parse([
  { title: 'Loren ipsum', description: LOREM, category: 'tka' },
  { title: 'Loren ipsum', description: LOREM, category: 'tka' },
  { title: 'Loren ipsum', description: LOREM, category: 'tka' },
  { title: 'Loren ipsum', description: LOREM, category: 'utbk' },
  { title: 'Loren ipsum', description: LOREM, category: 'utbk' },
  { title: 'Loren ipsum', description: LOREM, category: 'utbk' },
  { title: 'Loren ipsum', description: LOREM, category: 'umum' },
  { title: 'Loren ipsum', description: LOREM, category: 'umum' },
  { title: 'Loren ipsum', description: LOREM, category: 'umum' },
]);
