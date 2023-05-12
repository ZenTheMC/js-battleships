import ship, { ship_lengths } from "./ship";

const createGameboard = () => {
  const board = [];
  const missedAttacks = [];

  const placeShip = (ship, coordinates, direction) => {
    const { row, column } = coordinates;
    const shipCells = [];

    if (direction === "horizontal") {
      for (let i = column; i < column + ship.length; i++) {
        shipCells.push({ row, column: i });
      }
    } else if (direction === "vertical") {
      for (let i = row; i < row + ship.length; i++) {
        shipCells.push({ row: i, column });
      }
    }

    const overlappingShip = shipCells.find(
      (cell) => board[cell.row][cell.column] === "ship"
    );
    if (overlappingShip) {
      throw new Error("Cannot place ship in the same location as another ship");
    }

    shipCells.forEach((cell) => {
      board[cell.row][cell.column] = "ship";
    });
  };

  const receiveAttack = (coordinates) => {
    const { row, column } = coordinates;
    const cell = board[row][column];

    if (cell === "ship") {
      const ship = getShipAtCoordinates(coordinates);
      ship.hit();
    } else if (cell === undefined) {
      missedAttacks.push(coordinates);
    }
  };

  const allShipsSunk = () => {
    return ships.every((ship) => ship.isSunk());
  };

  const getShipAtCoordinates = (coordinates) => {
    const { row, column } = coordinates;
    const shipId = board[row][column];
    const ship = ships.find((ship) => ship.id === shipId);
    return ship;
  };

  // Create the initial game board
  for (let i = 0; i < 10; i++) {
    board.push(Array(10).fill(undefined));
  }

  return {
    board,
    missedAttacks,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
};

export default createGameboard;