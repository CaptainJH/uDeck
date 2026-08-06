# Astrolify — Astro SaaS Starter

A premium SaaS landing page template built with [Astro](https://astro.build). Fully configurable from a single file, dark/light mode, CSS scroll-snap slider, and zero JS frameworks.

## Stack

- **Astro** — static-first framework with island architecture
- **TypeScript** — type-safe config and components
- **CSS custom properties** — design token system (`--ac-*`), no Tailwind dependency
- **Vanilla TS** — progressive enhancement only (slider, theme switch, accordion, tabs)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Configuration

All content lives in one file:

```
src/config/site.config.ts
```

Edit brand, navigation, hero, stats, logo cloud, features, pricing, testimonials, FAQ, and footer sections without touching any component.

## Project structure

```
src/
├── components/       # Astro components (one per section)
├── config/
│   └── site.config.ts  # ← edit this to customize the page
├── data/
│   └── icons.ts      # SVG icon paths (ui, features, social)
├── layouts/
│   └── Layout.astro  # HTML shell, theme init, SEO meta
├── pages/
│   └── index.astro   # Page composition
├── styles/
│   └── globals.css   # Design tokens and global utilities
└── utils/            # Shared helpers
```

## Theme

The site follows the OS color scheme preference by default (`prefers-color-scheme`). Users can override it with the toggle in the header. No flash on load — the theme is applied synchronously in the `<head>` before first paint.

## Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Type-check and build to `./dist` |
| `npm run preview` | Preview the production build locally |

## License

MIT
