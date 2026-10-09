export const SITE = {
  title: 'Rise Camp · STEI-K ITB',
  description: 'Rise Camp oleh STEI-K ITB 2026 — materi, program, dan dokumentasi.',
  lang: 'id',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/materi', label: 'Materi' },
  { href: '/program', label: 'Program Kami' },
];

/** Secondary links grouped under the "Lain-lain" dropdown in the navbar/sidebar. */
export const MORE_NAV = [
  { href: '/dokumentasi', label: 'Dokumentasi' },
  { href: '/qna', label: 'QnA' },
  { href: '/blog', label: 'Blog' },
];

export const FOOTER_LINKS = [
  { href: '/dokumentasi', label: 'Dokumentasi' },
  { href: '/qna', label: 'QnA' },
  { href: '/blog', label: 'Blog' },
];

export const SOCIAL = {
  instagram: { handle: '@steikitb26', href: 'https://www.instagram.com/steikitb26/' },
};

// Static site: questions are collected through an external form. Empty = button shown as "coming soon".
export const QNA_FORM_URL = '';
