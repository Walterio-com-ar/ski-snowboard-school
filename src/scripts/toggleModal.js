const modalOverlays = document.querySelectorAll(
  '.modal-overlay, .modal-submitted, .modal-submitted__result'
);

setTimeout(() => {
  modalOverlays.forEach((e) => {
    e.style.transition = 'all 0.5s';
  });
}, 1500);

export function open(e) {
  return e.classList.add('modal-show');
}

export function close(e) {
  return e.classList.remove('modal-show');
}
