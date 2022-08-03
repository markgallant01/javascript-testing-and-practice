const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let randomInRange = (min, max) => {
  // returns random integer in range [min-max] inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let checkGuess = num => {
  if (num > secretNumber) {
    console.log('Too high.');
    return false;
  }
  else if (num < secretNumber) {
    console.log('Too low.');
    return false;
  }
  else {
    console.log('Correct!');
    return true;
  }
}

let askGuess = () => {
  rl.question("Enter a guess: ", (answer) => {
    answer = Number(answer);

    if (checkGuess(answer)) {
      console.log('You win!');
      rl.close();
    }
    else {
      askGuess();
    }
  });
}

let secretNumber = randomInRange(1, 100);

askGuess();

