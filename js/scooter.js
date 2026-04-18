/* ============================================================
   RUDRA KITS – scooter.js
   Configurator + flip cards for the scooter page
   ============================================================ */

/* ── CONFIGURADOR SCOOTER ── */
(function () {
  const kits = {
    urban: {
      name:        'Urban Volt',
      spec:        '1500W',
      speed:       '45km/h',
      base:        2299,
      upgrades:    [0, 350, 470],
      ranges:      ['60-80km', '85-110km', '110-130km'],
      caps:        ['20Ah', '28Ah', '35Ah'],
      battDefault: 0
    },
    storm: {
      name:        'Storm Rider',
      spec:        '3000W',
      speed:       '65km/h',
      base:        3899,
      upgrades:    [0, 500, 700],
      ranges:      ['80-100km', '120-140km', '150-170km'],
      caps:        ['25Ah', '35Ah', '45Ah'],
      battDefault: 0
    },
    titan: {
      name:        'Titan Moto',
      spec:        '5000W',
      speed:       '80km/h',
      base:        5999,
      upgrades:    [0, 800, 1150],
      ranges:      ['90-120km', '160-180km', '200-220km'],
      caps:        ['30Ah', '45Ah', '60Ah'],
      battDefault: 0
    }
  };

  let selectedKit = 'storm';
  let battIdx     = 0;

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
    if (slider) slider.style.background =
      `linear-gradient(to right, #F5C518 ${pct}%, #ddd ${pct}%)`;
  }

  function updateUI() {
    const kit   = kits[selectedKit];
    const extra = kit.upgrades[battIdx];
    const price = kit.base + extra;
    const cap   = kit.caps[battIdx];
    const range = kit.ranges[battIdx];

    if (capLabel)       capLabel.textContent  = cap;
    if (capExtra)       capExtra.textContent  = extra > 0 ? `+S/${extra}` : 'Incluido';
    if (rangeLabel)     rangeLabel.textContent = range;

    ticks.forEach((t, i) => {
      if (t) t.className = i === battIdx ? 'tick-active' : '';
    });

    if (previewName)    previewName.textContent  = kit.name;
    if (previewSpec)    previewSpec.textContent  = `${kit.spec} • Batería ${cap}`;
    if (previewPrice)   previewPrice.textContent = `S/${price.toLocaleString()}`;
    if (previewBase)    previewBase.textContent  = extra > 0
      ? `Base S/${kit.base.toLocaleString()} + S/${extra}`
      : `Precio base`;
    if (previewSpeed)   previewSpeed.textContent = kit.speed;
    if (previewRange)   previewRange.textContent = range;
    if (battBadgeLabel) battBadgeLabel.textContent = `${kit.name} ${kit.spec}`;

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
      if (slider) slider.value = battIdx;

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
