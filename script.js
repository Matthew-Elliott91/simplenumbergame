'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const message = document.querySelector('.message');
const checkButton = document.querySelector('.check');

document.querySelector('.guess').focus();

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    checkButton.click();
  }
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no guess
  if (!guess) {
    message.textContent =
      'Please enter a number between 1 and 20 into the box!';

    //When guess is correct
  } else if (guess === secretNumber) {
    message.textContent = 'You have guessed the number correctly!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (guess > 20 || guess < 1) {
      message.textContent = 'Please use a number between 1 and 20';
    } else if (score > 1) {
      message.textContent =
        guess > secretNumber
          ? 'Your guess is too high!'
          : 'Your guess is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Restart the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').focus();
});

//High score
