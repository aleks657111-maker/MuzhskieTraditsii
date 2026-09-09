document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('header');
  if (!toggle || !header) return;

  toggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });
  header.querySelectorAll('.nav-links a').forEach((a) => {
    a.addEventListener('click', () => header.classList.remove('nav-open'));
  });
});
