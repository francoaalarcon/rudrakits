/**
 * partners.js — Huella Agencia Digital
 * ─────────────────────────────────────────────────────────
 * Datos de partners y renderizado del grid.
 *
 * Cada partner puede tener:
 *   name    → Nombre (accesibilidad / alt)
 *   imgSrc  → Ruta a imagen real (png/svg/webp). Preferido.
 *   logoSvg → SVG inline como string (fallback sin imagen)
 * ─────────────────────────────────────────────────────────
 */

const partners = [
  {
    name: 'Shopify Partners',
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 48" class="partner-logo-svg" aria-label="Shopify Partners">
      <rect x="0" y="8" width="32" height="32" rx="6" fill="#96BF48"/>
      <text x="16" y="30" font-family="Arial" font-size="18" font-weight="900" fill="white" text-anchor="middle">S</text>
      <text x="44" y="26" font-family="Arial" font-size="13" font-weight="700" fill="#1a1a1a">shopify</text>
      <text x="44" y="40" font-family="Arial" font-size="10" fill="#6b6b6b">partners</text>
    </svg>`,
  },
  {
    name: 'VTEX Partner',
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" class="partner-logo-svg" aria-label="VTEX Partner">
      <polygon points="16,8 28,8 20,28 8,28" fill="#F71963"/>
      <polygon points="20,28 32,8 44,8 32,28" fill="#F71963"/>
      <text x="52" y="26" font-family="Arial" font-size="16" font-weight="900" fill="#F71963">VTEX</text>
      <text x="52" y="40" font-family="Arial" font-size="10" fill="#6b6b6b">Partner</text>
    </svg>`,
  },
  {
    name: 'Google Partner',
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 56" class="partner-logo-svg" aria-label="Google Partner">
      <g transform="translate(36,4)">
        <path d="M24 12.5c0-1.1-.1-2.1-.3-3.1H12v5.9h6.7c-.3 1.6-1.2 3-2.5 3.9v3.2h4c2.4-2.2 3.8-5.4 3.8-9z" fill="#4285F4"/>
        <path d="M12 24c3.4 0 6.2-1.1 8.3-3l-4-3.2c-1.1.8-2.6 1.2-4.3 1.2-3.3 0-6.1-2.2-7.1-5.2H.8v3.3C2.9 21.3 7.1 24 12 24z" fill="#34A853"/>
        <path d="M4.9 13.8c-.3-.8-.4-1.6-.4-2.5s.1-1.7.4-2.5V5.5H.8C-.1 7.2-.5 9-.5 11s.4 3.8 1.3 5.5l4.1-2.7z" fill="#FBBC05"/>
        <path d="M12 4.8c1.8 0 3.4.6 4.7 1.8l3.5-3.5C18.2 1.1 15.4 0 12 0 7.1 0 2.9 2.7.8 6.7l4.1 3.3C6 7 8.7 4.8 12 4.8z" fill="#EA4335"/>
      </g>
      <text x="60" y="38" font-family="Arial" font-size="10" fill="#6b6b6b" text-anchor="middle">Google Partner</text>
    </svg>`,
  },
  {
    name: 'Klaviyo Partner',
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" class="partner-logo-svg" aria-label="Klaviyo Partner">
      <rect x="0" y="4" width="44" height="40" rx="3" fill="white" stroke="#e0e0e0" stroke-width="1"/>
      <text x="22" y="30" font-family="Arial" font-size="14" font-weight="900" fill="#1a1a1a" text-anchor="middle">klaviyo</text>
      <text x="22" y="41" font-family="Arial" font-size="7" fill="#6b6b6b" text-anchor="middle" letter-spacing="2">PARTNER</text>
    </svg>`,
  },
  {
    name: 'Semrush Agency Partners',
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 48" class="partner-logo-svg" aria-label="Semrush Agency Partners">
      <polygon points="0,24 12,8 24,24 12,40" fill="#FF6B35"/>
      <text x="32" y="22" font-family="Arial" font-size="10" font-weight="700" fill="#6b6b6b">Semrush</text>
      <text x="32" y="36" font-family="Arial" font-size="12" font-weight="900" fill="#1a1a1a">Agency Partners</text>
    </svg>`,
  },
  {
    name: 'Kinsta Agency Partner',
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 48" class="partner-logo-svg" aria-label="Kinsta Agency Partner">
      <rect x="0" y="8" width="32" height="32" rx="6" fill="#7B2FFF"/>
      <text x="16" y="30" font-family="Arial" font-size="16" font-weight="900" fill="white" text-anchor="middle">K</text>
      <text x="40" y="26" font-family="Arial" font-size="14" font-weight="900" fill="#1a1a1a">Kinsta</text>
      <text x="40" y="40" font-family="Arial" font-size="9" fill="#6b6b6b">Agency Partner</text>
    </svg>`,
  },
  {
    name: 'Growlat',
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 48" class="partner-logo-svg" aria-label="Growlat">
      <text x="0" y="36" font-family="Georgia,serif" font-size="28" font-weight="900" fill="#1a1a1a" letter-spacing="-1">grow</text>
      <text x="76" y="36" font-family="Georgia,serif" font-size="28" font-weight="400" fill="#1a1a1a">lat</text>
    </svg>`,
  },
  {
    name: 'Mercado Pago',
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 56" class="partner-logo-svg" aria-label="Mercado Pago">
      <circle cx="24" cy="24" r="22" fill="#00BCFF" opacity=".15" stroke="#00BCFF" stroke-width="2"/>
      <circle cx="36" cy="24" r="22" fill="#00BCFF" opacity=".15" stroke="#00BCFF" stroke-width="2"/>
      <text x="80" y="21" font-family="Arial" font-size="13" font-weight="900" fill="#1a1a1a" text-anchor="middle">mercado</text>
      <text x="80" y="37" font-family="Arial" font-size="13" font-weight="900" fill="#1a1a1a" text-anchor="middle">pago</text>
    </svg>`,
  },
  {
    name: 'Openpay by BBVA',
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" class="partner-logo-svg" aria-label="Openpay">
      <circle cx="16" cy="24" r="14" fill="#00B4D8"/>
      <circle cx="16" cy="24" r="8" fill="white"/>
      <text x="38" y="29" font-family="Arial" font-size="20" font-weight="900" fill="#1a1a1a">Openpay</text>
    </svg>`,
  },
  {
    name: 'Multivende',
    logoSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 48" class="partner-logo-svg" aria-label="Multivende">
      <polygon points="0,32 10,12 18,24 26,12 36,32" fill="#38C9A0"/>
      <text x="44" y="30" font-family="Arial" font-size="15" font-weight="900" fill="#1a1a1a" letter-spacing="1">MULTIVENDE</text>
    </svg>`,
  },
];

/* ── Render ── */
const grid = document.getElementById('partners-grid');

if (grid) {
  partners.forEach(partner => {
    const cell = document.createElement('div');
    cell.className = 'partner-cell';
    cell.setAttribute('title', partner.name);
    cell.setAttribute('aria-label', partner.name);

    if (partner.imgSrc) {
      const img = document.createElement('img');
      img.src = partner.imgSrc;
      img.alt = partner.name;
      img.className = 'partner-logo';
      img.loading = 'lazy';
      cell.appendChild(img);
    } else if (partner.logoSvg) {
      cell.innerHTML = partner.logoSvg;
    }

    grid.appendChild(cell);
  });
}
