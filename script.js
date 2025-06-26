'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');
  let number = document.querySelector('.number');
  let highscoreContent = document.querySelector('.highscore');
  let scoreContent = document.querySelector('.score');

  if (score > 1) {
    if (!guess) {
      message.textContent = '🛑 No Number Input';
    } else if (guess === secretNumber) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      number.textContent = secretNumber;
      number.style.width = '30rem';

      message.textContent = '🎉 Correct Number!';
      highScore = secretNumber > highScore ? secretNumber : highScore;
      highscoreContent.textContent = highScore;
    } else {
      message.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      scoreContent.textContent = score;
    }
  } else {
    message.textContent = '🥺 You lost the game !';
    scoreContent.textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message');
  let number = document.querySelector('.number');
  let highscoreContent = document.querySelector('.highscore');
  let scoreContent = document.querySelector('.score');

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  number.textContent = '?';
  number.style.width = '15rem';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
  scoreContent.textContent = 20;
});
