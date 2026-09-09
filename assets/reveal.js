document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll(
    '.frame, .split > div:not(.frame), .loc-photo, .services-head, .cat-block, .card, .foot-grid > div'
  );

  const perParentCount = new Map();
  els.forEach((el) => {
    el.classList.add('reveal');
    const i = perParentCount.get(el.parentElement) || 0;
    el.style.transitionDelay = Math.min(i * 90, 360) + 'ms';
    perParentCount.set(el.parentElement, i + 1);
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  els.forEach((el) => io.observe(el));
});
