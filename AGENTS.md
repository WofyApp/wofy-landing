# Repository Guidelines

## Project Structure & Module Organization

This repository is an Astro 5 landing site styled with Tailwind CSS 4. Astro uses file-based routing under `src/pages/`; for example, `src/pages/pricing.astro` serves `/pricing`, while `src/pages/index.astro` serves `/`. Reusable UI belongs in `src/components/`, shared page shells in `src/layouts/`, and global styles in `src/styles/global.css`. Import optimized images from `src/assets/`; reserve `public/` for files copied unchanged, such as `robots.txt` and `favicon.svg`.

## Build, Test, and Development Commands

Run commands from the repository root, the same directory as this file:

- `pnpm install` installs the locked dependencies using pnpm 9.
- `pnpm dev` starts Astro's development server, normally at `http://localhost:4321`.
- `pnpm build` creates the production site in `dist/` and catches Astro/build errors.
- `pnpm preview` serves the production build for final local review.
- `pnpm astro --help` lists available Astro CLI commands.

There is currently no dedicated automated test or lint script. Treat a clean `pnpm build` as the minimum validation, then manually check changed routes at desktop and mobile widths. Verify navigation, external links, responsive menus, and image loading.

## Coding Style & Naming Conventions

Match the surrounding file because no formatter is enforced. Existing Astro templates use tabs for nested markup, single-quoted JavaScript imports, and semicolons where already established. Keep Tailwind utilities in markup and shared tokens/utilities in `src/styles/global.css`; do not introduce a second styling system. Name reusable components in PascalCase (`PriceCard.astro`), pages in lowercase kebab-case (`historial-clinico.astro`), and assets descriptively. Preserve the site's Spanish product terminology and add meaningful `alt` text and accessible labels.

## Commit & Pull Request Guidelines

Recent history favors short, imperative subjects, often with Conventional Commit prefixes such as `feat:` and `fix:`. Use a focused form like `feat: add clinic reminder section`; avoid vague messages such as `Update page`. Pull requests should explain the user-facing change, list affected routes, include validation performed, and link the relevant issue. Add before/after screenshots for visual changes, with both desktop and mobile views when responsive behavior changes.

## Agent-Specific Instructions

Local skills live in the repository's `.skills/` directory. Before starting a task, inspect that directory, select the skill relevant to the request, and read its file completely before taking action. Apply its instructions throughout the task. For interface audits or UI improvements, use `.skills/BETTER-INTERFACE.md`; for UX or product-usability audits, use `.skills/UX-AUDIT.md`; for interface-copy or UX-writing reviews, use `.skills/UX-WRITING-STYLE.md`. These skills audit only the code in this repository and report prioritized, actionable improvements with `path:line` evidence. Never open a browser, visit a local or deployed site, start a development or preview server, install dependencies, generate build artifacts, or use a design canvas for these audits. Respect the exact component, route, or file scope requested by the user. Treat skill files as guidance, not application source, and do not modify them unless explicitly requested.
