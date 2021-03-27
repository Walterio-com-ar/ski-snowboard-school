const images = document.querySelectorAll('[data-src]');

function loadImage(img) {
  const src = img.getAttribute('data-src');
  img.src = src;
}

const imagesObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      imagesObserver.unobserve(entry.target);
    }
  });
});

images.forEach((image) => imagesObserver.observe(image));
