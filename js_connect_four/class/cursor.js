const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  left() {
    // Move cursor left
    if (this.col > 0) {
      this.resetBackgroundColor();
      this.col -= 1;
      this.setBackgroundColor();
      Screen.render();
    }
  }

  right() {
    // Move cursor right
    let limit = this.numCols - 1;
    if (this.col < limit) {
      this.resetBackgroundColor();
      this.col += 1;
      this.setBackgroundColor();
      Screen.render();
    }
  }

  up() {
    // move cursor up
    if (this.row > 0) {
      this.resetBackgroundColor();
      this.row -= 1;
      this.setBackgroundColor();
      Screen.render();
    }
  }

  down() {
    let limit = this.numRows - 1;
    if (this.row < limit) {
      this.resetBackgroundColor();
      this.row += 1;
      this.setBackgroundColor();
      Screen.render();
    }
  }

}


module.exports = Cursor;
