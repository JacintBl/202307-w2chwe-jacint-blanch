class NextBoard {
  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.board = this.createBoard();
  }

  nextBoard() {
    const nextBoard = [];

    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.columns; j++) {
        const randomValue = Math.round(Math.random());
        row.push(randomValue);
      }

      nextBoard.push(row);
    }

    let sum = 0
    let neighbours = countNeighbours(board,i,j)
    let state = board[i][j]

    if (state == 0 && neighbours == 3){
      nextBoard[i][j] = 1;
    } else if (state == 1 && (neighbours<2 || ){
      nextBoard[i][j] = 0;
    })else{
      nextBoard[i][j] = state
    }
    
    
    
    return nextBoard;
  }

  countNeighbours(board, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        sum += board[i][j];
      }
    }

    sum -= board[x][y];
    return sum;
  }
}

export default NextBoard;
