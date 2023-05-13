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

  // Function to get the ship at given coordinates
  const getShipAtCoordinates = (coordinates) => {
    const { row, column } = coordinates;
    const shipId = board[row][column];
    const ship = Object.values(ships).find((ship) => ship.id === shipId);
    return ship;
  };

  // Function to receive attacks and handle missed shots
  const receiveAttack = (coordinates) => {
    const { row, column } = coordinates;
    const cell = board[row][column];

    if (cell === "ship") {
      const ship = getShipAtCoordinates(coordinates);
      ship.hit();
    } else if (cell === "empty") {
      missedAttacks.push(coordinates);
    }
  };

  const allShipsSunk = () => {
    return ships.every((ship) => ship.isSunk()); //
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