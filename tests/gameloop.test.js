import gameLoop from "../gameloop";
import createPlayer from "../player";
import createGameBoard from "../gameboard";

describe("Game play Loop", () => {
  test("Check if gameLoop ends the game when a player has all their ships sunk", () => {
    // Create player 1
    const gameboard1 = createGameBoard();
    const player1 = createPlayer(gameboard1);
    gameboard1.receiveAttack({ row: 0, column: 0 });
    gameboard1.receiveAttack({ row: 0, column: 1 });
    gameboard1.receiveAttack({ row: 0, column: 2 });

    // Create player 2
    const gameboard2 = createGameBoard();
    const player2 = createPlayer(gameboard2);
    gameboard2.receiveAttack({ row: 1, column: 0 });
    gameboard2.receiveAttack({ row: 1, column: 1 });

    // Mock render function
    const mockRender = jest.fn();

    // Run the game loop
    gameLoop(player1, player2, mockRender);

    // Check that the game loop ended when a player had all their ships sunk
    expect(mockRender).toHaveBeenCalledTimes(4); // Number of rounds played
  });
});