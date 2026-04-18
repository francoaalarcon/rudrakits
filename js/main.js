/* ============================================================
   RUDRA KITS – main.js
   ============================================================ */

/* ── CONFIGURADOR ── */
(function () {
  const kits = {
    eco:   { name: 'Eco Furia',   spec: '350W',  speed: '30km/h', base: 1499, upgrades: [0, 200, 800], ranges: ['25-35km', '35-45km', '60-80km'], caps: ['16Ah', '16Ah', '25Ah'],   battDefault: 0 },
    veloz: { name: 'Veloz Titan', spec: '500W',  speed: '40km/h', base: 1899, upgrades: [0, 200, 500], ranges: ['30-40km', '35-50km', '45-65km'], caps: ['16Ah', '19.2Ah', '25Ah'], battDefault: 1 },
    blitz: { name: 'Blitz',       spec: '1200W', speed: '55km/h', base: 2699, upgrades: [0, 400, 500], ranges: ['35-45km', '45-60km', '55-75km'], caps: ['16Ah', '20Ah', '20Ah'],   battDefault: 0 }
  };

  let selectedKit = 'veloz';
  let battIdx     = 1;

  const slider         = document.getElementById('battSlider');
  const capLabel       = document.getElementById('capLabel');
  const capExtra       = document.getElementById('capExtra');
  const rangeLabel     = document.getElementById('rangeLabel');
  const ticks          = [
    document.getElementById('tick0'),
    document.getElementById('tick1'),
    document.getElementById('tick2')
  ];
  const previewName    = document.getElementById('previewName');
  const previewSpec    = document.getElementById('previewSpec');
  const previewPrice   = document.getElementById('previewPrice');
  const previewBase    = document.getElementById('previewBase');
  const previewSpeed   = document.getElementById('previewSpeed');
  const previewRange   = document.getElementById('previewRange');
  const battBadgeLabel = document.getElementById('battBadgeLabel');

  function updateSliderFill(val, max) {
    const pct = (val / max) * 100;
    slider.style.background = `linear-gradient(to right, #F5C518 ${pct}%, #ddd ${pct}%)`;
  }

  function updateUI() {
    const kit   = kits[selectedKit];
    const extra = kit.upgrades[battIdx];
    const price = kit.base + extra;
    const cap   = kit.caps[battIdx];
    const range = kit.ranges[battIdx];

    capLabel.textContent       = cap;
    capExtra.textContent       = extra > 0 ? `+S/${extra}` : 'Incluido';
    rangeLabel.textContent     = range;

    ticks.forEach((t, i) => {
      t.className = i === battIdx ? 'tick-active' : '';
    });

    previewName.textContent    = kit.name;
    previewSpec.textContent    = `${kit.spec} • Batería ${cap}`;
    previewPrice.textContent   = `S/${price.toLocaleString()}`;
    previewBase.textContent    = extra > 0
      ? `Base S/${kit.base.toLocaleString()} + S/${extra}`
      : `Base S/${kit.base.toLocaleString()}`;
    previewSpeed.textContent   = kit.speed;
    previewRange.textContent   = range;
    battBadgeLabel.textContent = `${kit.name} ${kit.spec}`;

    updateSliderFill(battIdx, 2);
  }

  if (slider) {
    slider.addEventListener('input', function () {
      battIdx = parseInt(this.value);
      updateUI();
    });
  }

  document.querySelectorAll('.config-kit-row').forEach(row => {
    row.addEventListener('click', function () {
      selectedKit = this.dataset.kit;
      battIdx     = kits[selectedKit].battDefault;
      slider.value = battIdx;

      document.querySelectorAll('.config-kit-row').forEach(r => {
        r.classList.remove('config-kit-row--selected');
        r.querySelector('.ckr-radio').classList.remove('ckr-radio--selected');
        r.querySelector('.ckr-icon').classList.remove('ckr-icon--selected');
      });

      this.classList.add('config-kit-row--selected');
      this.querySelector('.ckr-radio').classList.add('ckr-radio--selected');
      this.querySelector('.ckr-icon').classList.add('ckr-icon--selected');
      this.querySelector('input').checked = true;

      updateUI();
    });
  });

  updateUI();
})();


/* ── FLIP CARDS – BENEFICIOS ── */
document.querySelectorAll('.benefit-card').forEach(card => {
  card.addEventListener('click', function () {
    this.classList.toggle('flipped');
  });
});
