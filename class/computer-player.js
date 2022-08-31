
class ComputerPlayer {

  static getValidMoves(grid) {
    // Your code here
    let moves = [];

    // loop through grid
    for (let i = 0; i < grid.length; i++) {
      let row = grid[i];
      for (let j = 0; j < row.length; j++) {
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


  }

  static getSmartMove(grid, symbol) {
    // check for any winning moves
    // then check for any blocking moves
    // then pick a random move
  }

}

module.exports = ComputerPlayer;
