# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # dev server at localhost:5173
npm run build      # tsc -b && vite build
npm run lint       # eslint
npm run preview    # preview production build
```

No test runner is configured.

## Architecture

Single-page marketing site for the Tempest gym-tracking app. No routing — one scroll page composed of section components.

**Entry:** `src/main.tsx` → `src/App.tsx` assembles `Navbar / Hero / Features / AppPreview / Footer`.

**`src/index.css`** is the design system source of truth. It uses **Tailwind CSS v4** syntax (`@import "tailwindcss"`, no `tailwind.config.js`). All design tokens are OKLCH CSS variables defined in `:root {}`, then exposed to Tailwind via `@theme inline {}`. Editing colors/radius/fonts means editing this file only.

- Primary accent: `--primary: oklch(0.60 0.22 293)` (violet)
- Dark mode: toggled by adding `.dark` class to an ancestor (not `prefers-color-scheme`)

**`src/components/ui/`** contains hand-written shadcn/ui primitives (Button, Card, Badge, Separator) — new-york style, zinc base. `components.json` configures shadcn CLI for adding more components (`npx shadcn@latest add <component>`).

**Path alias:** `@/` resolves to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`).
