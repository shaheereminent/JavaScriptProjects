'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//Toggle Modal function
const toggleModal = function (class1, class2, toggle) {
  class1.classList[toggle]('hidden');
  class2.classList[toggle]('hidden');
};

// Open Modal Button Function
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    toggleModal(modal, overlay, 'remove');
  });
}

// Closing Model Via X Button
btnCloseModal.addEventListener('click', function () {
  toggleModal(modal, overlay, 'add');
});

// Closing Model Via Anywhere in the Screen 'Overlay' Button
overlay.addEventListener('click', function () {
  toggleModal(modal, overlay, 'add');
});

//  Closing model via Escape Button
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleModal(modal, overlay, 'add');
  }
});
