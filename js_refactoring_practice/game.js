const readline = require('readline');

/********************************* CONSTANTS *********************************/
const VALID_MOVES = {
  r: {
    name: 'Rock',
    winsAgainst: 's'
  },
  p: {
    name: 'Paper',
    winsAgainst: 'r'
  },
  s: {
    name: 'Scissors',
    winsAgainst: 'p'
  }
};

/********************************* GAME DATA *********************************/
let wins = 0;
let losses = 0;
let ties = 0;

/* DO NOT CHANGE THE CODE ABOVE */

/***************************** HELPER FUNCTIONS ******************************/
function printHelp() {
  // Your code here
  console.log("  Type 'r' for Rock");
  console.log("  Type 'p' for Paper");
  console.log("  Type 's' for Scissors");
  console.log("  Type 'q' to quit");
  console.log("  Type 'h' for a list of valid commands\n");
}

function getWinner(move1, move2) {
  // Your code here
  // tie condition
  if (move1 === move2) {
    return 0;
  }
  else {
    // move1 beats move2
    if ((move1 === 's' && move2 === 'p') ||
        (move1 === 'p' && move2 === 'r') ||
        (move1 === 'r' && move2 === 's')) {
      return 1;
    }
    else {
      // move1 loses to move2
      return -1;
    }
  }
}

function getCPUMove() {
  // Your code here
  let moves = ['p', 'r', 's'];
  let randomIndex = Math.floor(Math.random() * moves.length);
  
  return moves[randomIndex];
}

function processMove(cmd, cpu) {
  // Your code here
  console.log(`You pick ${cmd}, computer picks ${cpu}.`);

  if ((cpu === 'r' && cmd === 'r') ||
      (cpu === 's' && cmd === 's') ||
      (cpu === 'p' && cmd === 'p')) {
    console.log("You tie.\n");
  }
  else if ((cpu === 'r' && cmd === 'p') ||
           (cpu === 'p' && cmd === 's') ||
           (cpu === 's' && cmd === 'r')) {
    console.log("You win!\n");
  }
  else {
    console.log("You lose...\n");
  }
}

/******************************* MAIN FUNCTION *******************************/
function promptInput(rl) {
  console.log(`${wins} wins - ${losses} losses - ${ties} ties`);

  rl.question('> ', (cmd) => {
    cmd = cmd.toLowerCase();

    if (cmd === 'h') {
      console.log("\nHelp:\n");
      printHelp();
    } 
    else if (cmd === 'q') {
      rl.close();
      return;
    } 
    else if (VALID_MOVES[cmd]){
      const cpu = getCPUMove();
      const result = getWinner(cmd, cpu);
      processMove(cmd, cpu);

      if (result === 0) { // tie
        ties++;
      }
      else if (result === 1) { // win
        wins++;
      } 
      else { // loss
        losses++;
      }
    } 
    else {
      console.log("\nInvalid command.\n");
      printHelp();
    }

    promptInput(rl);
  });
}

/****************************** INITIALIZE GAME ******************************/
function initializeGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  console.log("Welcome to Rock/Paper/Scissors\n");
  printHelp();
  promptInput(rl);
}

// start the game if running this file directly, `node game.js`
// do not start the game if running test specs
if (typeof require !== 'undefined' && require.main === module) {
  initializeGame();
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  printHelp,
  getWinner,
  getCPUMove,
  processMove,
  promptInput
};
