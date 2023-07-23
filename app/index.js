import CreateBoard from "./CreateBoard/CreateBoard.js";

const columns = 20;
const rows = 20;
const board = new CreateBoard(columns, rows);

board.renderBoard();
