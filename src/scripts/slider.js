const INTERVAL = 14800;
const ANIM_DURATION = 1200;

const slider = document.querySelector('.slider');
const slides = Array.from(slider.children);
const dots = document.querySelector('.slider-dots');

let current = 0;
let prev = slides.length - 1;
let intrvl;
let timeout;

function animateSlider(next, right) {
  if (!next) next = current + 1 < slides.length ? current + 2 : 1;

  next -= 1;
  slides[prev].style.animationName = '';

  if (!right) {
    slides[next].style.animationName = 'leftNext';
    slides[current].style.animationName = 'leftCurr';
  } else {
    slides[next].style.animationName = 'rightNext';
    slides[current].style.animationName = 'rightCurr';
  }

  prev = current;
  current = next;

  dots.children[current].classList.add('dot-active');
  dots.children[prev].classList.remove('dot-active');
}

function dotClick(num) {
  if (num === current) return;

  clearTimeout(timeout);
  clearInterval(intrvl);

  if (num > current) animateSlider(num + 1);
  else animateSlider(num + 1, true);

  intrvl = setInterval(animateSlider, INTERVAL);
}

slides.forEach((e) => {
  e.style.animationDuration = `${ANIM_DURATION}ms`;

  const dot = document.createElement('div');
  dot.classList.add('slider-dot');
  dots.appendChild(dot);
  dot.addEventListener(
    'click',
    dotClick.bind(null, dots.children.length - 1),
    false
  );
});

dots.children[0].classList.add('dot-active');
slides[0].style.left = '0';

timeout = setTimeout(() => {
  animateSlider();
  slides[0].style.left = '';
  intrvl = setInterval(animateSlider, INTERVAL);
}, INTERVAL - ANIM_DURATION);
