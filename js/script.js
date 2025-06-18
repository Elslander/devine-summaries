// script-enhancements.js

document.addEventListener('DOMContentLoaded', () => {
    animateDetails();
    animatePageEntrance();
    enhanceActiveLinks();
  });
  
  /**
   * Animate <details> opening/closing
   */
  function animateDetails() {
    const detailsList = document.querySelectorAll('details');
  
    detailsList.forEach((detail) => {
      detail.addEventListener('toggle', () => {
        const summary = detail.querySelector('summary');
        if (detail.open) {
          summary.classList.add('open');
        } else {
          summary.classList.remove('open');
        }
      });
    });
  }
  
  /**
   * Animate the page entrance with a simple fade-in
   */
  function animatePageEntrance() {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.5s ease';
    requestAnimationFrame(() => {
      document.body.style.opacity = 1;
    });
  }
  
  /**
   * Add active class to current nav or summary link
   */
  function enhanceActiveLinks() {
    const currentURL = window.location.href;
  
    // Highlight nav item
    document.querySelectorAll('.menu__item a').forEach((link) => {
      if (link.href === currentURL) {
        link.classList.add('active');
      }
    });
  
    // Highlight current summary link
    document.querySelectorAll('.summaries__link').forEach((link) => {
      if (currentURL.includes(link.getAttribute('href'))) {
        link.classList.add('active');
      }
    });
  }
  