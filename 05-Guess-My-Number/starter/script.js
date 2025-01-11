'use strict'
const number = document.querySelector('.number')
const again = document.querySelector('.again')
const score = document.querySelector('.score')
const message = document.querySelector('.message')
const guess = document.querySelector('.guess')
const check = document.querySelector('.check')
const highScore = document.querySelector('.highscore')

//Generating secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1)

//Player Score
let playerScore = Number(score.textContent)

// Reset game function
const restartGame = function () {
  score.textContent = 20
  message.textContent = 'Start guessing...'
  guess.value = null
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  number.textContent = '?'
  playerScore = 20
  check.disabled = false
  document.querySelector('body').style.backgroundColor = '#222'
  number.style.width = '15rem'
}

// Checking Answer Function
const checkAnswer = function () {
  const guessedNumber = Number(guess.value)
  if (!guessedNumber) {
    message.textContent = '⛔ No Number!'
  } else if (guessedNumber > secretNumber) {
    message.textContent = '📈 Too high'
    decrementScore()
  } else if (guessedNumber < secretNumber) {
    message.textContent = '📉 Too low'
    decrementScore()
  } else if (guessedNumber === secretNumber) {
    message.textContent = '🎉 Correct number!'
    number.textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#60b347'
    number.style.width = '30rem'
    if (playerScore > Number(highScore.textContent)) {
      highScore.textContent = score.textContent
    }
  }
}

// Game Losing Function
const checkLose = function () {
  if (playerScore < 1) {
    message.textContent = '💥 You lost!'
    score.textContent = 0
    check.disabled = true
    document.querySelector('body').style.backgroundColor = 'red'
  }
}

// Decrementing Score
const decrementScore = function () {
  if (playerScore >= 1) {
    playerScore -= 1
    score.textContent = playerScore
  }
}

again.addEventListener('click', restartGame)

check.addEventListener('click', function () {
  checkAnswer()
  checkLose()
})
