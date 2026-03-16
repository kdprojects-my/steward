/* ============================================================
   simulator.js — Module 4: Investment Portfolio Simulator
   Steward Oversight Platform
   ============================================================ */

function initSimulator() {
  const sliders = ['sliderPerCo', 'sliderNumCo', 'sliderFail', 'sliderTop'];
  sliders.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateSim);
  });
  updateSim();
}

function updateSim() {
  const perCo   = parseInt(document.getElementById('sliderPerCo')?.value || 100) * 1000;
  const numCo   = parseInt(document.getElementById('sliderNumCo')?.value || 20);
  const failPct = parseInt(document.getElementById('sliderFail')?.value  || 60) / 100;
  const topMult = parseInt(document.getElementById('sliderTop')?.value   || 100);

  // Update display values
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('valPerCo', '$' + (perCo / 1000) + 'K');
  set('valNumCo', numCo);
  set('valFail',  Math.round(failPct * 100) + '%');
  set('valTop',   topMult + '×');

  const deployed  = perCo * numCo;
  const survivors = Math.round(numCo * (1 - failPct));
  const failed    = numCo - survivors;
  const stars     = survivors > 0 ? 1 : 0;
  const breakouts = survivors > 1 ? Math.min(2, survivors - 1) : 0;
  const modest    = Math.max(0, survivors - stars - breakouts);

  const totalReturn =
    stars     * perCo * topMult +
    breakouts * perCo * 10 +
    modest    * perCo * 3;

  const multiple = deployed > 0 ? (totalReturn / deployed).toFixed(1) : '0';

  set('rTotal',     fmt(totalReturn));
  set('rDeployed',  fmt(deployed));
  set('rMultiple',  multiple + '×');
  set('rSurvivors', survivors);
  set('rFailed',    failed);

  // Portfolio dots
  const dots = [];
  for (let i = 0; i < numCo; i++) {
    if (i === 0 && stars > 0)            dots.push('star');
    else if (i < 1 + breakouts)          dots.push('breakout');
    else if (i < 1 + breakouts + modest) dots.push('modest');
    else                                  dots.push('fail');
  }

  const labels = { star: '★', breakout: '↑', modest: '·', fail: '' };
  const dotGrid = document.getElementById('dotGrid');
  if (dotGrid) {
    dotGrid.innerHTML = dots.map(t =>
      `<div class="pdot ${t}">${labels[t] || ''}</div>`
    ).join('');
  }
}
