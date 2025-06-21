/* ──────────────────────────────────────────────────────────
   Mobile navigation toggle
   ────────────────────────────────────────────────────────── */
   document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
  
    const nav = sidebar.querySelector('.sidebar__nav');
    if (!nav) return;
  
    // Create the hamburger button only once
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'menu__toggle';
    toggleBtn.setAttribute('aria-label', 'Toggle navigation');
    toggleBtn.innerHTML = '&#9776;'; // Unicode hamburger
  
    sidebar.insertBefore(toggleBtn, nav);
  
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  });
  