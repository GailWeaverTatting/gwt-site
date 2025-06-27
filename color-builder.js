// Завантажити палітру з JSON
let palettes = [];
fetch('assets/palettes.json').then(r => r.json()).then(data => {
  palettes = data;
  fillPaletteSelect('ring-color');
  fillPaletteSelect('chain-color');
});

function fillPaletteSelect(selectId) {
  const sel = document.getElementById(selectId);
  palettes.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.hex;
    opt.textContent = p.name + ' (' + p.hex + ')';
    sel.appendChild(opt);
  });
}

const svgContainer = document.getElementById('svg-container');
let svgDoc = null;
let currentRow = 1;

// Завантажуємо SVG
fetch('svg/doily1.svg')
  .then(r => r.text())
  .then(svg => {
    svgContainer.innerHTML = svg;
    svgDoc = svgContainer.querySelector('svg');
    populateRowSelect();
  });

// Додаємо вибір рядів
function populateRowSelect() {
  const rows = Array.from(svgDoc.querySelectorAll('g[id^="Row"]'));
  const rowSelect = document.getElementById('row-select');
  rows.forEach((row, i) => {
    const opt = document.createElement('option');
    opt.value = i + 1;
    opt.textContent = 'Ряд ' + (i + 1);
    rowSelect.appendChild(opt);
  });
  rowSelect.addEventListener('change', e => {
    currentRow = e.target.value;
    updateUI();
  });
  updateUI();
}

// Оновлення UI (кольори)
function updateUI() {
  const ringColor = document.getElementById('ring-color').value || '#000000';
  const chainColor = document.getElementById('chain-color').value || '#cccccc';
  colorRow(currentRow, ringColor, chainColor);
}

// Зміна кольору через палітру
document.getElementById('ring-color').addEventListener('change', e => {
  document.getElementById('ring-color-picker').value = e.target.value;
  updateUI();
});
document.getElementById('chain-color').addEventListener('change', e => {
  document.getElementById('chain-color-picker').value = e.target.value;
  updateUI();
});

// Зміна кольору через color picker
document.getElementById('ring-color-picker').addEventListener('input', e => {
  colorRow(currentRow, e.target.value, document.getElementById('chain-color-picker').value);
});
document.getElementById('chain-color-picker').addEventListener('input', e => {
  colorRow(currentRow, document.getElementById('ring-color-picker').value, e.target.value);
});

// Функція фарбування SVG
function colorRow(rowNum, ringColor, chainColor) {
  if (!svgDoc) return;
  const rings = svgDoc.querySelectorAll(`#Row${rowNum} #Row${rowNum}-Rings *`);
  rings.forEach(el => el.setAttribute('fill', ringColor));
  const chains = svgDoc.querySelectorAll(`#Row${rowNum} #Row${rowNum}-Chains *`);
  chains.forEach(el => el.setAttribute('fill', chainColor));
}