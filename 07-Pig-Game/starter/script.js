'use strict';
// Selecting Elements
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold')(
  // Initial Game State
  (score0EL.textContent = 0)
);
score1EL.textContent = 0;
diceEL.classList.add('hidden');

//Generating random number
let randomNumber = Math.trunc(Math.random() * 6 + 1);
