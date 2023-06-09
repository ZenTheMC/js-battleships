import createPlayer from "../player";
import createGameBoard from "../gameboard"

describe("Random Attack method", () => {
  test("Check if randomAttack calls gameBoard.receiveAttack with random coordinates", () => {
    // Create a mock gameboard with a mock receiveAttack function
    const mockReceiveAttack = jest.fn();
    const mockGameboard = {
      receiveAttack: mockReceiveAttack,
    };

    const player = createPlayer(mockGameboard);
    player.randomAttack();

    // Check if gameBoard.receiveAttack was called with random coordinates
    expect(mockReceiveAttack).toHaveBeenCalled();
    expect(mockReceiveAttack.mock.calls[0][0]).toMatchObject({
      row: expect.any(Number),
      column: expect.any(Number),
    });
  });
});