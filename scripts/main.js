// small, readable script for filtering and basic interactions
document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('lang-search');
  const list = document.getElementById('languageList');

  if (search && list) {
    search.addEventListener('input', e => {
      const q = e.target.value.trim().toLowerCase();
      Array.from(list.children).forEach(card => {
        const label = (card.dataset.label || '').toLowerCase();
        card.style.display = label.includes(q) ? '' : 'none';
      });
    });

    list.addEventListener('click', e => {
      const card = e.target.closest('.language-card');
      if (!card) return;
      // simple visual feedback
      card.style.transform = 'translateY(-6px)';
      setTimeout(() => card.style.transform = '', 180);
      console.log('Selected:', card.dataset.label);
    });
  }
});