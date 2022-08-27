const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    let winner;
    // check for horizontal wins
    grid.forEach(row => {
      if (row[0] === 'X' &&
          row[1] === 'X' &&
          row[2] === 'X') {
        winner = 'X';
      }
      else if (row[0] === 'O' &&
               row[1] === 'O' &&
               row[2] === 'O') {
        winner = 'O';
      }
    });

    // check for vertical wins
    for (let i = 0; i < grid.length; i++) {
      if (grid[0][i] === 'X' &&
          grid[1][i] === 'X' &&
          grid[2][i] === 'X') {
        winner = 'X';
      }
      else if (grid[0][i] === 'O' &&
               grid[1][i] === 'O' &&
               grid[2][i] === 'O') {
        winner = 'O';
      }
    }

    // check for diagonal wins
    // only two possible diagonal win conditions
    // first check for X
    if (grid[0][0] === 'X' &&
        grid[1][1] === 'X' &&
        grid[2][2] === 'X') {
      winner = 'X';
    }
    else if (grid[0][2] === 'X' &&
             grid[1][1] === 'X' &&
             grid[2][0] === 'X') {
      winner = 'X';
    }

    // check same conditions for O
    if (grid[0][0] === 'O' &&
        grid[1][1] === 'O' &&
        grid[2][2] === 'O') {
      winner = 'O';
    }
    else if (grid[0][2] === 'O' &&
             grid[1][1] === 'O' &&
             grid[2][0] === 'O') {
      winner = 'O';
    }

    // if there's no winner then check for a tie
    if (!winner) {
      let tie = true;
      grid.forEach(row => {
        row.forEach(block => {
          if (block === ' ') {
            tie = false;
          }
        });
      });

      if (tie) {
        winner = 'T';
      }
    }

    if (winner) {
      return winner;
    }
    else {
      return false;
    }
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
