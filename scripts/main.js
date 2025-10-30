// Basic client-side interactions: search filter + theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('lang-search');
  const list = document.getElementById('languageList');
  const toggle = document.getElementById('theme-toggle');

  // filter language cards by data-label
  search && search.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    Array.from(list.children).forEach(card => {
      const label = (card.dataset.label || '').toLowerCase();
      card.style.display = label.includes(q) ? '' : 'none';
    });
  });

  // simple theme toggle (adds .light on body)
  toggle && toggle.addEventListener('click', () => {
    const on = document.body.classList.toggle('light');
    toggle.setAttribute('aria-pressed', String(on));
    toggle.textContent = on ? '☀️' : '🌙';
  });

  // click card to highlight (placeholder for preview)
  list && list.addEventListener('click', (e) => {
    const card = e.target.closest('.language-card');
    if (!card) return;
    const name = card.dataset.label || 'language';
    card.animate([{ transform: 'translateY(-6px) scale(1.02)' }, { transform: 'translateY(0) scale(1)' }], { duration: 260 });
    console.log('Selected:', name);
  });
});