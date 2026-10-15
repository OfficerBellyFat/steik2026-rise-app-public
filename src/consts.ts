export const SITE = {
  title: 'Rise Camp · STEI-K ITB',
  description: 'Rise Camp oleh STEI-K ITB 2026 — materi, program, dan dokumentasi.',
  lang: 'id',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/program', label: 'Program Kami' },
  { href: '/survei', label: 'Survei SNBT' },
  { href: '/dokumentasi', label: 'Dokumentasi' },
];

/**
 * Secondary links, rendered under a "Lain-lain" dropdown in the navbar and the
 * sidebar. Empty, so neither component renders the dropdown at all.
 */
export const MORE_NAV: { href: string; label: string }[] = [];

export const FOOTER_LINKS = [
  { href: '/dokumentasi', label: 'Dokumentasi' },
];

export const SOCIAL = {
  instagram: { handle: '@steikitb26', href: 'https://www.instagram.com/steikitb26/' },
};

