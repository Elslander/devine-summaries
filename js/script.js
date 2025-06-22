// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;

  const nav = sidebar.querySelector(".sidebar__nav");
  if (!nav) return;

  // Create hamburger button if not present
  let toggleBtn = sidebar.querySelector(".menu__toggle");
  if (!toggleBtn) {
    toggleBtn = document.createElement("button");
    toggleBtn.className = "menu__toggle";
    toggleBtn.setAttribute("aria-label", "Toggle navigation");
    toggleBtn.innerHTML = "&#9776;";
    sidebar.insertBefore(toggleBtn, nav);
  }

  // Toggle handler
  const toggleSidebar = () => {
    sidebar.classList.toggle("open");
  };

  // Hamburger click toggles menu
  toggleBtn.addEventListener("click", toggleSidebar);

  // Make the whole header clickable on mobile to toggle menu
  const title = sidebar.querySelector(".sidebar__title");
  if (title) {
    // Wrap title and hamburger in a clickable container for better UX
    // Or just make the title clickable:
    title.style.cursor = "pointer";
    title.addEventListener("click", toggleSidebar);

    // Bonus: on mobile only, make the entire sidebar header area clickable
    // We'll attach to sidebar for simplicity, but only trigger if click is on header area
    // Alternatively, keep this simple and only target the title.
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
