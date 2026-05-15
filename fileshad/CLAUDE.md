# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page static landing site for **Huella Agencia Digital**, a Lima-based eCommerce agency. Pure HTML/CSS/vanilla JS — no build toolchain, no package manager, no external dependencies beyond Google Fonts.

## Development

No build step required. Serve directly:

```bash
python3 -m http.server 8080
# or
npx serve .
```

## Architecture

### File map

| File | Role |
|------|------|
| `index.html` | Single page — all sections live here |
| `css/main.css` | All styles (design tokens, layout, components) |
| `js/main.js` | Ticker loop, scroll-reveal (IntersectionObserver), FAQ accordion, sticky-header shadow |
| `js/clients.js` | Client data array + hover-preview interaction (list ↔ left-column card) |
| `js/partners.js` | Partner data array + renders partner logo grid via SVG strings |

### Data pattern

Editable content is stored as `const` arrays at the top of each JS file, not in HTML:

- **`clients`** in `clients.js` — each entry: `{ name, year, color, accent }`. The script builds both the list rows and the sticky preview cards from this array.
- **`partners`** in `partners.js` — each entry: `{ name, logoSvg?, imgSrc? }`. The script renders cells into `#partners-grid`. Use `imgSrc` for real images; `logoSvg` is the inline SVG fallback.

To add/edit a client or partner, only update the data array — the DOM is generated automatically.

### Scroll reveal

Elements with `[data-reveal]` start invisible (`opacity:0; transform:translateY(28px)`) via inline `<style>` in `index.html`. `main.js` uses `IntersectionObserver` to add `.is-visible` when they enter the viewport. Stagger delays use `data-delay="1|2|3"`.

### Design tokens (`css/main.css`)

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#EEEDEA` | Warm cream — main background |
| `--accent` | `#157EFB` | Electric blue — CTAs, highlights |
| `--lima` | `#DAFF00` | Vibrant lime — underlines, accents |
| `--text-primary` | `#111110` | Carbon black — headings/body |
| `--font-display` | TASA Orbiter / Syne | Headlines |
| `--font-body` | DM Sans | Body copy |
