'use strict';
// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, isPlaying, activePlayer;

// Initial Game Settings Function
function init() {
  isPlaying = true;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.remove('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('active--player');
  player1El.classList.remove('active--player');
}

// Switch Player Function
function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

init();
// Rolling Dice Function
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    // Generating Random Dice Roll
    const diceNum = Math.floor(Math.random() * 6) + 1;

    // Displaying Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNum}.png`;

    // Check for rolled 1: if true switch to next player

    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    // Adding Current Score to Scores Array at the Index of CurrentActivePlayer.

    scores[activePlayer] += currentScore;
    // Setting Text Content of Score to Score of total at the index of ActivePlayer
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Checking if any player reached the max score then the game ends and the player wins
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      isPlaying = false;
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

// Resetting the game

btnNew.addEventListener('click', function () {
  init();
});
