# Rise Camp · STEI-K ITB

Static site for Rise Camp: study materials (Google Drive links), programs, event documentation, QnA, and a blog. Built with [Astro](https://astro.build) and Tailwind CSS 4.

**Design:** team design file (shared privately, read-only). Local exports go in `design/` (gitignored).

## Getting started

Requires Node 22.12+.

```sh
npm install
npm run up       # start dev server in the background → http://localhost:4321
npm run down     # stop it
npm run status   # is it running?
npm run logs     # follow its logs
npm run dev      # or: run in the foreground (Ctrl+C to stop)
npm run check    # type-check
npm run build    # outputs static files to dist/
```

## Editing content

All content is hard-coded in the repo — there is no CMS. Changes go live when merged and redeployed.

| What | File |
|---|---|
| Materi cards (Drive links) | `src/data/materi.ts` |
| Program TKA / UTBK cards | `src/data/programs.ts` |
| Dokumentasi events + photos | `src/data/dokumentasi.ts` (images in `public/images/`) |
| QnA questions / answers | `src/data/qna.ts` |
| QnA "Tambah Pertanyaan" form link | `QNA_FORM_URL` in `src/consts.ts` |
| Nav, footer links, Instagram | `src/consts.ts` |
| Blog posts | `src/content/blog/*.md` |

Drive links must be shared as **"Anyone with the link"** — the site only links to Drive; access is controlled by Drive itself. A malformed URL in `materi.ts` fails the build.

### Blog posts

Add a `.md` (or `.mdx`) file to `src/content/blog/`. The filename becomes the URL (`my-post.md` → `/blog/my-post`).

```md
---
title: Post title
description: One-line summary shown in listings.
pubDate: 2026-10-04
tags: [announcement]
draft: false
---

Post body in Markdown.
```

Posts with `draft: true` show up in dev but are excluded from production builds.

## Pages

`/` Home · `/tentang-kami` · `/materi` · `/program` · `/program/materi` · `/dokumentasi` · `/qna` · `/blog`

## Deployment

Pure static output — no server needed. Recommended: **Cloudflare Pages** (free, works with private repos).

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22+
