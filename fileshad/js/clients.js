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
  { name: 'UPC',                      year: 2024, color: '#003DA5', accent: '#FFD700' },
  { name: 'Caja Arequipa',            year: 2024, color: '#CC0000', accent: '#FFEB3B' },
  { name: 'Mr. Peet',                 year: 2024, color: '#2E7D32', accent: '#A5D6A7' },
  { name: 'Villa Victoria',           year: 2024, color: '#4E342E', accent: '#D7CCC8' },
  { name: 'Viva Tierra Inmobiliaria', year: 2024, color: '#1B5E20', accent: '#DAFF00' },
  { name: 'Café Grosso',              year: 2024, color: '#3E2723', accent: '#FFAB91' },
  { name: 'GMS',                      year: 2024, color: '#1A237E', accent: '#82B1FF' },
  { name: 'PG Inspecciones',          year: 2024, color: '#01579B', accent: '#80D8FF' },
  { name: 'Prime Cargo USA',          year: 2023, color: '#BF360C', accent: '#FFAB91' },
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
