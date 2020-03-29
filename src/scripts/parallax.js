const parallax = document.querySelectorAll('[data-speed]');

window.addEventListener('scroll', () => {
  parallax.forEach(i => {
    const item = i;
    const y = window.scrollY;
    const speed = parseFloat(i.getAttribute('data-speed'));
    item.style.transform = `translateY(${y * -speed}px)`;
  });
});
