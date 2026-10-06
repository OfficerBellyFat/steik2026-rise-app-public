## Project

Static site for Rise Camp (STEI-K ITB '26): Drive-linked study materials, programs, event docs, QnA, blog. Astro (static output) + Tailwind CSS 4 + MDX.

- Content is hard-coded in the repo by request — do not introduce a CMS, database, or server runtime.
- Content data lives in `src/data/*.ts`; site-wide strings in `src/consts.ts`; blog in `src/content/blog/`.
- Design tokens (colors sampled from Figma, fonts) are in `src/styles/global.css` `@theme`.
- Design source: team design file (shared privately, read-only). Exports in `design/` (gitignored).
- Missing assets render via `<Placeholder>` and are marked `TODO` in the markup.
- `CLAUDE.md` is a symlink to this file — edit `AGENTS.md` only.
- Run `npm run check` and `npm run build` before committing.

## Development

Start/stop the dev server in the background with `npm run up` / `npm run down` (`npm run status`, `npm run logs`).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
