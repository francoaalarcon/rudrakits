# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Rudra Kits is a static e-commerce/lead-generation site for electric bike and scooter conversion kits targeting the Lima, Peru market. It is pure HTML/CSS/vanilla JS with no build toolchain, no package manager, and no external dependencies.

## Development

No build step is required. Open any `.html` file directly in a browser, or serve the directory with a local HTTP server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

There are no tests, no linters, and no CI configured.

## Architecture

### Page → CSS → JS mapping

| Page | Stylesheet | Script |
|------|-----------|--------|
| `index.html` | `css/styles.css` | `js/main.js` |
| `scooter.html` | `css/styles.css` + `css/scooter.css` | `js/scooter.js` |
| `beneficios.html` | `css/styles.css` + `css/beneficios.css` | — |
| `contacto.html` | `css/styles.css` + `css/contact.css` | `js/contact.js` |
| `terminos.html` / `privacidad.html` | `css/styles.css` + `css/legal.css` | `js/legal.js` |

`css/styles.css` (963 lines) contains all global styles including the nav, hero, and shared components. Page-specific stylesheets extend it.

### JavaScript modules

Each script is an IIFE with no imports. They use `data-*` attributes to bind behaviour:

- `js/main.js` — bike kit selector + 3-tier battery slider + flip cards. Product data (prices, ranges, specs) is hardcoded in the `kits` object at the top of the file.
- `js/scooter.js` — same pattern as `main.js` but for scooter kits.
- `js/contact.js` — contact form validation, chip-based reason selector, FAQ accordion.
- `js/legal.js` — smooth-scroll for table-of-contents links in legal pages.

### Product configurator pattern

Both `main.js` and `scooter.js` follow the same pattern:
1. A `kits` object holds all product data (name, spec, speed, base price, battery upgrade prices, ranges).
2. Kit radio buttons (`data-kit`) trigger `updateDisplay()` which recalculates the price from the slider position + selected kit.
3. The battery slider uses `data-value` ticks and drives a visual fill bar alongside the price update.

### Design tokens

- Brand accent: `#F5C518` (yellow/gold)
- Background: `#0a0a0a` (near black)
- CSS uses BEM-inspired class names (`config-kit-row--selected`, `btn-primary`, etc.) and CSS custom properties for spacing.
