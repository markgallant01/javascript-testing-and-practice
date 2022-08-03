const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 10;

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

askGuess();

