import '../styles/style.css';
import '../styles/modern.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/input.css';
import '../styles/utils.css';

// Important notes
// 1. frist thing to do with user imput applications is t assume there is no no imput and we need to respond to that.
// 2. define the secret number
// 3. what if the guess is correct to secret number? when player wins
// 4. what if the guess is greater than the secret number?
// 5. what if the guess is lower than the secret number?
// 6. create a score variable where we will start. coding the highscore
// 7. decrease the score within the else if statements as needed
// 8. add losing statement after reaching 0
// 9. what happens if it reaches 0 ?
// 10. change the background color to green when the player wins!
// 11. increase the width once you win
// 12. implemeting the reset button / starting with selecting the div / add function
// 13. restore values of score and seceret number
//14. restore intial conditions of message, number, score, guess input
// 15. restore original background and width
// 16. implement the highscore feature /starts by making a variable
// 17. check is the score greater than highscore
// 18. refactoring our code / restructure our code to remove duplicates

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;

let highScore = 0;

function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

// const guessButton = document.getElementsByClassName('.guess')

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const totalScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number is selected!');
  } else if (guess === secretNumber) {
    displayMessage('You guessed it!!');
    showConfetti();

    document.querySelector('.hero__number').textContent = secretNumber;

    document.querySelector('.hero__number').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! :(' : 'Too low!  :(');
      score--;
      totalScore(score);
    } else {
      displayMessage('You lost the game and suck ass! :(');
      totalScore(0);
    }
  }
});

document.querySelector('.again__btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  totalScore(score);
  document.querySelector('.hero__number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
});
