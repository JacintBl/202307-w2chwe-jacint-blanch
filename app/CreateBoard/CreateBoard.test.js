import CreateBoard from "./CreateBoard.js";

describe("Given a CreateBoard class", () => {
  describe("When it receives columns = 20 and rows = 20", () => {
    test("Then it should create a board with 20rows and 20 columns", () => {
      const expectedcolumns = 20;
      const expectedrows = 20;

      const board = new CreateBoard(expectedcolumns, expectedrows);

      expect(board.columns).toBe(expectedcolumns);
      expect(board.rows).toBe(expectedrows);
    });
  });
});
