# treybotard.com

Personal website for Trey Botard: Developer Experience, Customer Systems, and Applied AI.

Built with **Nuxt 3**, **Tailwind CSS**, and **@nuxt/icon** (bundled locally).

## Structure

- [data/site.ts](data/site.ts): Typed content, navigation, selected work, approach, experience, speaking, and social links
- [composables/useActiveSection.ts](composables/useActiveSection.ts): `IntersectionObserver` scrollspy for desktop and mobile navigation
- [pages/index.vue](pages/index.vue): Main page, SEO/OpenGraph metadata, and JSON-LD structured data
- [layouts/default.vue](layouts/default.vue): Sticky desktop sidebar, mobile header nav, and skip-to-content link
- [components/](components/): Page sections (`Bio`, `SelectedWork`, `Approach`, `Experience`, `Speaking`, `Contact`, `TBFooter`, navigation)

## Development

```bash
pnpm install
pnpm dev
```

## Validation & Build

```bash
pnpm typecheck
pnpm build
pnpm preview
```

Static generation is also available via `pnpm generate`. The root route `/` is prerendered during `pnpm build`.
