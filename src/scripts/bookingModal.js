const bookingOverlay = document.querySelector('.booking .modal-overlay');
const heroButton = document.querySelector('.hero-button');
const offerButtons = document.querySelector('.offers-blocks');

const form = document.querySelector('.booking form');
const name = document.querySelector('[type=text]');
const email = document.querySelector('[type=email]');
const age = document.querySelector('[name=age]');
const level = document.querySelector('[name=level]');

function openBookingModal() {
  bookingOverlay.classList.add('modal-show');
}

function closeBookingModal() {
  bookingOverlay.classList.remove('modal-show');
}

function submitForm() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const data = {
    name: name.value,
    email: email.value,
    age: age.value,
    level: level.value,
  };
  try {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
  } catch (error) {
    console.error('Error:', error);
  }
}

heroButton.addEventListener('click', openBookingModal);

offerButtons.addEventListener('click', e => {
  if (e.target.matches('[name=beginner]')) {
    openBookingModal();
    level.value = 'beginner';
  }
  if (e.target.matches('[name=intermediate]')) {
    openBookingModal();
    level.value = 'intermediate';
  }
  if (e.target.matches('[name=advanced]')) {
    openBookingModal();
    level.value = 'advanced';
  }
});

bookingOverlay.addEventListener('click', e => {
  if (e.target === e.currentTarget) closeBookingModal();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  submitForm();
  e.target.reset();
  closeBookingModal();
});
