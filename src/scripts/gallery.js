import { open, close } from './toggleModal';

const gallery = document.querySelector('.gallery-images');
const galleryModal = document.querySelector('.gallery .modal');
const galleryOverlay = document.querySelector('.gallery .modal-overlay');
const prevButton = galleryModal.querySelector('.modal-prev');
const nextButton = galleryModal.querySelector('.modal-next');

let currentImage;

function showImage(target) {
  const image = target.querySelector('img') || target;
  galleryModal.querySelector('img').src = image.src;
  currentImage = target.closest('div') || target;
}

function showNextImage() {
  showImage(currentImage.nextElementSibling || gallery.firstElementChild);
}

function showPrevImage() {
  showImage(currentImage.previousElementSibling || gallery.lastElementChild);
}

function handleKeyUp(e) {
  if (e.key === 'Escape') close(galleryOverlay);
  if (e.key === 'ArrowRight') showNextImage();
  if (e.key === 'ArrowLeft') showPrevImage();
}

gallery.addEventListener('click', (e) => {
  if (e.target.matches('.gallery-image')) {
    open(galleryOverlay);
    showImage(e.target);
  }
});

galleryOverlay.addEventListener('click', () => close(galleryOverlay));

galleryModal.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.matches('.modal-next')) showNextImage();
  if (e.target.matches('.modal-prev')) showPrevImage();
});

window.addEventListener('keyup', handleKeyUp);
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);
