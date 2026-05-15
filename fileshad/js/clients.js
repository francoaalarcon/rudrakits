/**
 * clients.js — Huella Agencia Digital
 * ─────────────────────────────────────────────────────────
 * Datos de clientes y lógica de interacción hover.
 *
 * Propiedades por cliente:
 *   name   → Nombre mostrado en la lista y en la tarjeta
 *   year   → Año del proyecto
 *   color  → Color de fondo de la tarjeta preview
 *   accent → Color de acento del mockup
 * ─────────────────────────────────────────────────────────
 */

const clients = [
  { name: 'Roxana Pardo',   year: 2024, color: '#6B2EFF', accent: '#A87CFF' },
  { name: 'Magitech',       year: 2024, color: '#1A1A2E', accent: '#E94560' },
  { name: 'Origens',        year: 2024, color: '#0D3B5E', accent: '#FFD700' },
  { name: 'Cinco AM',       year: 2024, color: '#0F3460', accent: '#FFA500' },
  { name: 'Grupo DJJ',      year: 2024, color: '#1B4332', accent: '#95D5B2' },
  { name: 'RGM',            year: 2024, color: '#2D2D2D', accent: '#F5F5F5' },
  { name: 'R&M Portátiles', year: 2023, color: '#1A1A2E', accent: '#00D4FF' },
  { name: 'Vakimú',         year: 2023, color: '#3D0C11', accent: '#FF6B6B' },
  { name: 'Jiang',          year: 2023, color: '#1C1C1C', accent: '#FF4500' },
  { name: 'Audioplace',     year: 2023, color: '#0D1B2A', accent: '#4FC3F7' },
  { name: 'Sydney',         year: 2023, color: '#2E1A47', accent: '#E040FB' },
  { name: 'Almendra',       year: 2023, color: '#3E2723', accent: '#FFCCBC' },
  { name: 'Savi Safety',    year: 2022, color: '#01579B', accent: '#FFD600' },
  { name: 'Barker',         year: 2022, color: '#1B5E20', accent: '#A5D6A7' },
];

/* ── Referencias DOM ── */
const previewWrap = document.querySelector('.preview-wrap');
const defaultEl   = document.getElementById('preview-default');
const listEl      = document.getElementById('client-list');

if (!previewWrap || !defaultEl || !listEl) {
  console.warn('clients.js: elementos DOM no encontrados');
} else {

  /* ── Construye las tarjetas de preview (columna izquierda) ── */
  clients.forEach((client, index) => {
    const card = document.createElement('div');
    card.className = 'preview-card';
    card.id = `card-${index}`;

    const initials = client.name
      .split(' ')
      .map(w => w[0])
      .slice(0, 2)
      .join('');

    card.innerHTML = `
      <div class="card-bg" style="background: ${client.color};">
        <div class="dot-grid"></div>
        <div class="year-badge">${client.year}</div>

        <div class="phone-mockup">
          <div class="phone-screen">
            <div class="phone-nav">
              <span style="
                font-family: var(--font-display);
                font-weight: 700;
                font-size: 0.65rem;
                color: #111;
                letter-spacing: 0.04em;
              ">${client.name.split(' ')[0].toUpperCase()}</span>
              <div class="phone-nav-icons">
                <div class="phone-nav-icon"></div>
                <div class="phone-nav-icon"></div>
              </div>
            </div>
            <div class="phone-body">
              <div style="
                width: 90px;
                height: 90px;
                border-radius: 50%;
                background: linear-gradient(135deg, ${client.accent}44, ${client.accent}18);
                border: 2px solid ${client.accent}66;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: var(--font-display);
                font-weight: 700;
                font-size: 1.5rem;
                color: ${client.accent};
              ">${initials}</div>
            </div>
          </div>
        </div>

        <div class="card-label">
          <div class="client-name">${client.name}</div>
          <div class="client-year">Proyecto · ${client.year}</div>
        </div>
      </div>
    `;

    previewWrap.appendChild(card);
  });

  /* ── Construye las filas de la lista (columna derecha) ── */
  clients.forEach((client, index) => {
    const item = document.createElement('div');
    item.className = 'client-item';
    item.dataset.idx = index;

    item.innerHTML = `
      <span class="client-name-text">
        ${client.name}
        <span class="arrow">→</span>
      </span>
      <span class="client-year-text">${client.year}</span>
    `;

    item.addEventListener('mouseenter', () => {
      defaultEl.style.opacity = '0';
      document.querySelectorAll('.preview-card').forEach(el => el.classList.remove('active'));
      const activeCard = document.getElementById(`card-${index}`);
      if (activeCard) activeCard.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
      document.querySelectorAll('.preview-card').forEach(el => el.classList.remove('active'));
      defaultEl.style.opacity = '1';
    });

    listEl.appendChild(item);
  });

}
