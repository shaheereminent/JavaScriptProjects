'use strict'
// document.querySelector('.message').textContent = 'Correct Number!'
document.querySelector('.score').textContent = 20
// document.querySelector('.guess').value = 20

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

function displayMessage(message) {
  document.querySelector('.message').textContent = message
}

// Game Reset Function
function gameReset() {
  secretNumber = Math.trunc(Math.random() * 20) + 1
  score = 20
  document.querySelector('.score').textContent = score
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?'
  document.querySelector('body').style.backgroundColor = '#222'
  displayMessage('Start guessing...')
  document.querySelector('.guess').value = ''
}

document.querySelector('.again').addEventListener('click', () => gameReset())

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    displayMessage() = '⛔ No Number!'
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = secretNumber
    displayMessage('🎉 Correct Number!')
    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
        
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('💥 You lost the game!')
      document.querySelector('.score').textContent = 0
    }
  }
})
