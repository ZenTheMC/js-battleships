import createGameboard from "../gameboard";
import ship from "../ship";

describe("Game Board initialization", () => {
  test("Check if game board is initialized as an empty board", () => {
    const gameboard = createGameboard();
    expect(gameboard.board).toEqual([
      Array(10).fill(undefined),
      Array(10).fill(undefined),
      Array(10).fill(undefined),
      Array(10).fill(undefined),
      Array(10).fill(undefined),
      Array(10).fill(undefined),
      Array(10).fill(undefined),
      Array(10).fill(undefined),
      Array(10).fill(undefined),
      Array(10).fill(undefined)
    ]);
  });
});
      
describe("Place Ship Method", () => {
  test("Check if ship is correctly placed on the board", () => {
    const gameboard = createGameboard();
    const ship1 = ship("cruiser");
    const coordinates = { row: 3, column: 5 };
    const direction = "horizontal";
    gameboard.placeShip(ship1, coordinates, direction);

    expect(gameboard.board[3][5]).toBe("ship");
    expect(gameboard.board[3][6]).toBe("ship");
    expect(gameboard.board[3][7]).toBe("ship");
  });

  test("Check if placing ships in the same location throws an error", () => {
    const gameboard = createGameboard();
    const ship1 = ship("submarine");
    const ship2 = ship("destroyer");
    const coordinates = { row: 3, column: 5 };
    const direction = "horizontal";
    gameboard.placeShip(ship1, coordinates, direction);

    expect(() => gameboard.placeShip(ship2, coordinates, direction)).toThrow("Cannot place ship in the same location as another ship");
  });
});

describe("Receive Attack Method", () => {
  test("Check if attack is correctly received and registered", () => {
    const gameboard = createGameboard();
    const ship1 = ship("cruiser");
    const shipCoordinates = { row: 3, column: 5 };
    const missedCoordinates = { row: 4, column: 4 };
    gameboard.placeShip(ship1, shipCoordinates, "horizontal");
    gameboard.receiveAttack(shipCoordinates);
    gameboard.receiveAttack({ row: 3, column: 6 });
    gameboard.receiveAttack(missedCoordinates);

    expect(ship1.getHits()).toBe(2);
    expect(gameboard.missedAttacks).toContainEqual(missedCoordinates);
  });
});

describe("All Ships Sunk Method", () => {
  test("Check if all ships are correctly identified as sunk", () => {
    const gameboard = createGameboard();
    const ship1 = ship("destroyer");
    const ship2 = ship("submarine");
    gameboard.placeShip(ship1, { row: 0, column: 0 }, "horizontal");
    gameboard.placeShip(ship2, { row: 2, column: 1 }, "vertical");

    ship1.hit();
    ship1.hit();
    ship2.hit();
    ship2.hit();
    ship2.hit();

    expect(gameboard.allShipsSunk()).toBe(true);
  });
});