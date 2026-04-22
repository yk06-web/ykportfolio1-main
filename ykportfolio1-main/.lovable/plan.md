

# Convert to standard Vite + React SPA for Vercel

Convert the project from TanStack Start (Cloudflare Workers SSR) to a plain static Vite + React SPA using `react-router-dom`, while preserving all visual design and content.

## What changes

**Build/deployment structure**
- Add `index.html` at project root (Vite entry, loads `/src/main.tsx`)
- Replace `vite.config.ts` with a standard config using `@vitejs/plugin-react`, `@tailwindcss/vite`, and `vite-tsconfig-paths`. Output goes to `dist/`.
- Remove `wrangler.jsonc` and all Cloudflare Workers config
- Add `vercel.json` with SPA rewrite (`/* → /index.html`) so deep links and refreshes work
- Update `package.json`: remove `@tanstack/react-start`, `@tanstack/router-plugin`, `@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config`. Add `react-router-dom`. Keep scripts `dev`, `build`, `preview`.
- Update `tsconfig.json`: drop TanStack-specific settings, keep path alias `@/*`

**Routing migration (TanStack Router → React Router DOM)**
- Create `src/main.tsx` bootstrapping React with `BrowserRouter`
- Create `src/App.tsx` with `<Routes>` mapping `/`, `/work`, `/services`, `/about`, `/contact`, and a 404 route
- Convert each `src/routes/*.tsx` page: strip `createFileRoute` / `Route.head()`, export a plain React component. Keep all JSX, styles, copy, and images identical.
- Replace `@tanstack/react-router` imports with `react-router-dom`:
  - `Link to="/x"` stays the same API
  - `useLocation` import source changes
- Move per-page `<title>` and `<meta>` into a small `useDocumentHead(title, description, og)` hook called from each page (sets `document.title` and meta tags on mount). No SSR, but preserves per-page metadata on the client.
- Delete `src/routes/__root.tsx`, `src/router.tsx`, and the auto-generated `src/routeTree.gen.ts`

**Files unchanged (design/content preserved)**
- All of `src/components/*` (Header, Footer, Hero, ParticleNetwork, DarkCTA, SiteLayout, ui/*)
- `src/styles.css` (fonts, palette, animations)
- `src/lib/utils.ts`, `src/hooks/*`
- Only the two import lines in `Header.tsx` change: `@tanstack/react-router` → `react-router-dom`

**index.html**
- Includes base `<title>`, viewport, favicon, OG tags matching current `__root.tsx` defaults, and `<div id="root">` + `<script type="module" src="/src/main.tsx">`

## Result

```text
/
├── index.html              (new, Vite entry)
├── vite.config.ts          (standard: react + tailwind + tsconfig-paths)
├── vercel.json             (new, SPA rewrite)
├── package.json            (TanStack/Cloudflare removed, react-router-dom added)
├── tsconfig.json           (cleaned)
└── src/
    ├── main.tsx            (new)
    ├── App.tsx             (new, Routes)
    ├── styles.css          (unchanged)
    ├── components/         (unchanged, except Header import)
    └── pages/
        ├── Index.tsx
        ├── Work.tsx
        ├── Services.tsx
        ├── About.tsx
        ├── Contact.tsx
        └── NotFound.tsx
```

Deploy to Vercel: framework preset "Vite", build command `npm run build`, output `dist`. No other config needed.

Design, copy, colors, fonts, particle hero, and all page layouts are untouched.

