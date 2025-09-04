document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;

  const nav = sidebar.querySelector(".sidebar__nav");
  if (!nav) return;

  let toggleBtn = sidebar.querySelector(".menu__toggle");
  if (!toggleBtn) {
    toggleBtn = document.createElement("button");
    toggleBtn.className = "menu__toggle";
    toggleBtn.setAttribute("aria-label", "Toggle navigation");
    toggleBtn.innerHTML = "&#9776;";
    sidebar.insertBefore(toggleBtn, nav);
  }

  const toggleSidebar = () => {
    sidebar.classList.toggle("open");
  };

  toggleBtn.addEventListener("click", toggleSidebar);

  const title = sidebar.querySelector(".sidebar__title");
  if (title) {
    title.style.cursor = "pointer";
    title.addEventListener("click", toggleSidebar);
  }

  // Animate subject cards on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card__visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".subject__card").forEach((card) => {
    card.classList.add("card__fade-in");
    observer.observe(card);
  });

  // Add ripple effect to all .summaries__link buttons
  document.querySelectorAll(".summaries__link").forEach((link) => {
    link.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.left = e.offsetX + "px";
      ripple.style.top = e.offsetY + "px";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});
// Get the toggle checkbox and root element
const checkbox = document.getElementById('theme-toggle-checkbox');
const root = document.documentElement;

// Load saved theme from localStorage (if any)
const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
checkbox.checked = savedTheme === 'light';

// Update theme when user toggles
checkbox.addEventListener('change', () => {
  const theme = checkbox.checked ? 'light' : 'dark';
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme); // Save choice
});
