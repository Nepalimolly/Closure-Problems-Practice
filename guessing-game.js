function guessingGame() {
  const randomNumber = Math.floor(Math.random() * 100);
  let counter = 0;
  let gameWon = false;

  return function guess(guess) {
    if (gameWon) {
      return "The game is over, you already won";
    }

    counter++;

    if (guess === randomNumber) {
      gameWon = true;
      return `You win! You found ${randomNumber} in ${counter} guesses`;
    }

    if (guess !== randomNumber) {
      if (guess < randomNumber) {
        return `${guess} is too low!`;
      } else {
        return `${guess} is too high!`;
      }
    }
  };
}

// function guessingGame() {
//   const ANSWER = Math.floor(Math.random() * 100);
//   let isOver = false;
//   let numGuesses = 0;

//   return function guess(num) {
//     if (isOver) return "The game is over, you already won!";
//     numGuesses++;
//     if (num === ANSWER) {
//       isOver = true;
//       const guess = numGuesses === 1 ? "guess" : "guesses";
//       return `You win! You found ${num} in ${numGuesses} ${guess}.`;
//     }
//     if (num < ANSWER) return `${num} is too low!`;
//     if (num > ANSWER) return `${num} is too high!`;
//   };
// }

module.exports = { guessingGame };
