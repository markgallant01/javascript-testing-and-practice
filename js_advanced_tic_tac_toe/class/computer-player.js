
class ComputerPlayer {

  static getValidMoves(grid) {
    // Your code here
    let moves = [];

    // loop through grid
    for (let i = 0; i < 3; i++) {
      let row = grid[i];
      for (let j = 0; j < 3; j++) {
        // if current square is empty, push it to moves array
        if (grid[i][j] === ' ') {
          moves.push({ row: i, col: j });
        }
      }
    }

    return moves;
  }

  static randomMove(grid) {
    // get list of valid moves
    let moves = ComputerPlayer.getValidMoves(grid);

    // pick a random move from moves array
    let min = 0;
    let max = moves.length - 1;
    let move = Math.floor(Math.random() * (max - min + 1) + min);

    return moves[move];
  }

  static getWinningMoves(grid, symbol) {
    let winningSequences = [` ,${symbol},${symbol}`,
                            `${symbol}, ,${symbol}`,
                            `${symbol},${symbol}, `];

    // iterate grid looking for horizontal wins
    for (let i = 0; i < 3; i++) {
      let currentRowString = grid[i].toString();

      // iterate winningSequnces looking for a match
      for (let j = 0; j < 3; j++) {
        let currentSequence = winningSequences[j];

        if (currentRowString === currentSequence) {
          // horizontal winning move found
          return { row: i, col: j };
        }
        
      }

    }

    // iterate grid looking for vertical wins
    for (let i = 0; i < 3; i++) {
      let colString = [grid[0][i], grid[1][i], grid[2][i]].toString();

      // compare sequence to winning sequences
      for (let j = 0; j < 3; j++) {
        let currentSequence = winningSequences[j];
        
        if (colString === currentSequence) {
          // vertical winning move found
          return { row: j, col: i };
        }
      }
    }

    // look for diagonal wins
    let diagonalCombos = [[grid[0][0], grid[1][1], grid[2][2]],
                          [grid[0][2], grid[1][1], grid[2][0]],
                          [grid[2][0], grid[1][1], grid[0][2]],
                          [grid[2][2], grid[1][1], grid[0][0]]];
    
    // iterate diagonalCombos and create each string sequence
    for (let i = 0; i < diagonalCombos.length; i++) {
      let diagString = diagonalCombos[i].toString();

      // compare the diagString to each winning sequence
      for (let j = 0; j < 3; j++) {
        let currentSequence = winningSequences[j];

        if (currentSequence === diagString) {
          // diagonal winning move found
          // figure out correct row and return move
          if (i === 0 || i === 1) {
            return { row: 2, col: j };
          }
          else {
            return { row: 0, col: j };
          }
        }

      }

    }

    // if no winning moves are found
    return false;
  }

  static getSmartMove(grid, symbol) {
    // check for any winning moves
    let move = ComputerPlayer.getWinningMoves(grid, symbol);

    if (move) {
      return move;
    }

    // then check for any blocking moves by checking for winning
    // moves for the opposite symbol
    symbol = symbol === 'X' ? 'O' : 'X';
    move = ComputerPlayer.getWinningMoves(grid, symbol);

    if (move) {
      return move;
    }

    // if no win and no block move exist, pick a random move
    return ComputerPlayer.randomMove(grid);

  }

}

module.exports = ComputerPlayer;
