class CreateBoard {
  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.board = this.createBoard();
  }

  createBoard() {
    const board = [];
    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.columns; j++) {
        const randomValue = Math.round(Math.random());
        row.push(randomValue);
      }

      board.push(row);
    }

    return board;
  }

  renderBoard() {
    console.table(this.board);
  }
}

export default CreateBoard;
