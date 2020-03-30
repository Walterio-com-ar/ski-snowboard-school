const parallax = document.querySelectorAll('[data-speed]');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y < header.clientHeight) {
    parallax.forEach(i => {
      const speed = parseFloat(i.getAttribute('data-speed'));
      i.style.transform = `translateY(${y * -speed}px)`;
    });
  }
});
