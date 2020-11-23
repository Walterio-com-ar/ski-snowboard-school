const slider = document.querySelector('.slider');
const slides = Array.from(slider.children);
const dotsContainer = document.querySelector('.testimonials-dots');

let current = slider.querySelector('.current') || slider.firstElementChild;
let prev = current.previousElementSibling || slider.lastElementChild;
let next = current.nextElementSibling || slider.firstElementChild;

slides.forEach(() => {
  const dot = document.createElement('div');
  dot.classList.add('testimonials-dot');
  dotsContainer.append(dot);
});

const dots = dotsContainer.querySelectorAll('.testimonials-dot');

function activeDot() {
  const activeSlide = slides.indexOf(document.querySelector('.current'));
  dots.forEach((e) => e.classList.remove('dot-active'));
  dots[activeSlide].classList.add('dot-active');
}

function applyClasses() {
  prev.classList.add('prev');
  current.classList.add('current');
  next.classList.add('next');
}

function removeClasses() {
  prev.classList.remove('prev');
  current.classList.remove('current');
  next.classList.remove('next');
}

function move() {
  removeClasses();
  [prev, current, next] = [
    current,
    next,
    next.nextElementSibling || slider.firstElementChild,
  ];
  applyClasses();
  activeDot();
}

applyClasses();
activeDot();

setInterval(() => {
  move();
}, 10000);

dotsContainer.addEventListener('click', (e) => {
  if (e.target.matches('.dot-active')) return;
  if (e.target.matches('.testimonials-dot')) {
    removeClasses();
    current = slides[Array.from(dots).indexOf(e.target)];
    prev = current.previousElementSibling || slider.lastElementChild;
    next = current.nextElementSibling || slider.firstElementChild;
    current.classList.add('current');
    setTimeout(applyClasses, 500);
    activeDot();
  }
});
