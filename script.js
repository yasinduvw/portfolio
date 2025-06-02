document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const isMobile = window.matchMedia("(max-width: 768px)");

  // Toggle menu only on mobile
  hamburger.addEventListener('click', function () {
    if (isMobile.matches) {
      this.classList.toggle('open');
      navLinks.classList.toggle('open');
      this.setAttribute('aria-expanded', this.classList.contains('open'));
    }
  });

  // Close menu when clicking outside (mobile only)
  document.addEventListener('click', function (event) {
    if (isMobile.matches && !hamburger.contains(event.target) && !navLinks.contains(event.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when clicking on a link (mobile only)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (isMobile.matches) {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });
});

console.log("Welcome to my portfolio!");
