'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Dynamic Manipulating Classes Function
function dynamicManipulatingClasses(elName, methodName, className) {
  elName.classList[methodName](className);
}

// Selecting Modal Button Dynamically
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    dynamicManipulatingClasses(modal, 'remove', 'hidden');
    dynamicManipulatingClasses(overlay, 'remove', 'hidden');
  });
}

// Close Modal Function
function closeModal() {
  dynamicManipulatingClasses(modal, 'add', 'hidden');
  dynamicManipulatingClasses(overlay, 'add', 'hidden');
}

// Open Modal Function
function openModal() {
  dynamicManipulatingClasses(modal, 'remove', 'hidden');
  dynamicManipulatingClasses(overlay, 'remove', 'hidden');
}

// Closing modal with Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
  
});

// Closing modal with clicks
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
