const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuToggle.innerHTML = `<i class="fa-solid fa-${isOpen ? 'xmark' : 'bars'}"></i>`;
});
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
}));
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const viewport = carousel.querySelector('.carousel-viewport');
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  const move = (direction) => viewport.scrollBy({ left: viewport.clientWidth * direction, behavior: 'smooth' });

  previous?.addEventListener('click', () => move(-1));
  next?.addEventListener('click', () => move(1));
});

const revealTargets = document.querySelectorAll(
  '.hero-copy, .hero-visual, .section-heading, .skill-card, .project-card, .timeline, .timeline-item, .about-content, .contact-content, .footer'
);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

revealTargets.forEach((element) => element.classList.add('reveal'));
document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach((element, index) => {
  element.style.setProperty('--reveal-order', String(index % 4));
});

if (reduceMotion) {
  revealTargets.forEach((element) => element.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealTargets.forEach((element) => revealObserver.observe(element));
}
