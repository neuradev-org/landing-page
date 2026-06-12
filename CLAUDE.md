# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing page for NeuraDev, an AI development & automation agency. Single-page site, no router, no backend. Bilingual (EN/ES) with browser/localStorage detection.

## Commands

Package manager is **pnpm** (see `pnpm-workspace.yaml`, `pnpm-lock.yaml`).

- `pnpm dev` — start Vite dev server
- `pnpm build` — `tsc -b` (project references) then `vite build`. The `tsc -b` step enforces strict type-checking and will fail the build on type errors.
- `pnpm preview` — preview the production build

There is no test runner and no separate lint command configured — `tsc -b` is the only static check. `tsconfig.app.json` enables `strict`, `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, and `noUncheckedSideEffectImports`, so unused imports/vars will break the build.

## Architecture

### Preact-as-React via aliasing
Despite imports like `from 'react'` and `from 'preact/compat'`, the runtime is **Preact**, not React. `tsconfig.app.json` aliases `react` and `react-dom` to `preact/compat`, and `vite.config.ts` uses `@preact/preset-vite` to do the same at bundle time. JSX is configured as `"jsx": "react-jsx"` with `"jsxImportSource": "preact"`. When adding code:
- Hooks come from `preact/hooks` (not `react`)
- `ReactNode` and similar types come from `preact/compat`
- Either `from 'react'` or `from 'preact/hooks'` works for hooks, but the codebase prefers `preact/hooks` directly for hooks and `preact/compat` for types

### Single-page composition
There is no router. `src/main.tsx` mounts `<App />` inside `<LanguageProvider>`. `App` resolves translations and renders `MainLayout` → `Home`, where `Home` stacks the page sections (`Hero`, `About`, `Services`, `Team`, `WhyUs`) in order. Navbar links use in-page anchors (`#home`, etc.), so section `id` attributes are load-bearing.

### Translations are prop-drilled
`getTranslations(lang)` in `src/translations/index.ts` returns a fully-typed `Translations` object that is passed as `t` from `App` down through every section. **All user-facing strings must be added to the `Translations` interface and both `en` and `es` records** — TypeScript enforces this. Don't hardcode strings in components.

Language state lives in `useLanguage` (`src/hooks/useLanguage.ts`) and is exposed via `LanguageContext`. Initial language: `localStorage['language']` → browser language (`es` or fallback `en`) → `en`. Changes persist to localStorage and update `document.documentElement.lang`.

### Styling
Tailwind CSS v4 via `@tailwindcss/vite` plugin. `src/index.css` only contains `@import "tailwindcss"` — there is no separate PostCSS config. `tailwind.config.js` exists for content paths and `darkMode: 'class'`, but dark mode toggling is not currently wired up in the UI; classes like `dark:bg-gray-900` are still used throughout and will activate if a `dark` class is added to `<html>`.

### Visual layer
`BackgroundCanvas` (`src/components/BackgroundCanvas.tsx`) runs a fixed full-viewport canvas particle animation behind all content (`z-0`; main content is `z-10`). It uses `requestAnimationFrame` and an O(n²) inner loop over 200 particles — be mindful when changing the particle count.

### External integrations
Two CTAs are hardcoded in `src/app.tsx`:
- Email: `mailto:neuradev.aisolutions@gmail.com`
- Booking: `https://calendly.com/neuradev-aisolutions/30min`

These handlers are passed down as `handleEmailClick` / `handleBookingClick` props.
