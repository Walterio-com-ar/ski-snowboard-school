const gallery = document.querySelector('.gallery-images');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.modal-overlay');
const prevButton = modal.querySelector('.modal-prev');
const nextButton = modal.querySelector('.modal-next');

let currentImage;

function showImage(target) {
  const image = target.querySelector('img') || target;
  modal.querySelector('img').src = image.src;
  currentImage = target.closest('div') || target;
}

function showNextImage() {
  showImage(currentImage.nextElementSibling || gallery.firstElementChild);
}

function showPrevImage() {
  showImage(currentImage.previousElementSibling || gallery.lastElementChild);
}

function openModal() {
  overlay.classList.add('modal-show');
}

function closeModal() {
  overlay.classList.remove('modal-show');
}

function handleKeyUp(e) {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') showNextImage();
  if (e.key === 'ArrowLeft') showPrevImage();
}

gallery.addEventListener('click', e => {
  if (e.target.matches('.gallery-image')) {
    openModal();
    showImage(e.target);
  }
});

overlay.addEventListener('click', () => closeModal());

modal.addEventListener('click', e => {
  e.stopPropagation();
  if (e.target.matches('.modal-next')) showNextImage();
  if (e.target.matches('.modal-prev')) showPrevImage();
});

window.addEventListener('keyup', handleKeyUp);
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);
