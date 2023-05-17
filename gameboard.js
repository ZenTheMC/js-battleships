import ship from "./ship";

const createGameboard = () => {

  const ships = {
    carrier: ship("carrier", 5),
    battleship: ship("battleship", 4),
    cruiser: ship("cruiser", 3),
    destroyer: ship("destroyer", 2),
  };
  
  const getAttackStatus = (coordinates) => {
    const { row, column } = coordinates;
    const cell = board[row][column];
  
    return cell !== "empty" && cell !== "miss";
  };
  
  
  const board = [];
  const missedAttacks = [];

  const placeShip = (ship, coordinates, direction) => {
    const { row, column } = coordinates;
    const shipCells = [];
  
    // Determine the cells occupied by the ship based on direction and ship length
    if (direction === "horizontal") {
      for (let i = column; i < column + ship.length; i++) {
        shipCells.push({ row, column: i });
      }
    } else if (direction === "vertical") {
      for (let i = row; i < row + ship.length; i++) {
        shipCells.push({ row: i, column });
      }
    }
  
    // Check if any of the ship cells are already occupied by another ship
    const overlappingShip = shipCells.find(
      (cell) => board[cell.row][cell.column] === "ship"
    );
    if (overlappingShip) {
      throw new Error("Cannot place ship in the same location as another ship");
    }
  
    // Mark the ship cells as occupied by the ship
    shipCells.forEach((cell) => {
      board[cell.row][cell.column] = "ship";
    });
  };

  // Function to receive attacks and handle missed shots
  const receiveAttack = (coordinates) => {
    const { row, column } = coordinates;
    const cell = board[row][column];
  
    if (cell === "ship") {
      const shipId = getShipAtCoordinates(coordinates);
      const ship = ships[shipId];
      const index = ship.cells.findIndex((cell) => cell.row === row && cell.column === column);
      ship.hit(index);
    } else if (cell === "empty") {
      missedAttacks.push(coordinates);
    }
  };  

  // Function to get the ship at given coordinates
  const getShipAtCoordinates = (coordinates) => {
    const { row, column } = coordinates;
    const shipId = board[row][column];
    if (!shipId) return null;
  
    const ship = ships.find((ship) => ship.id === shipId);
    return ship;
  };
  
  
  const allShipsSunk = (ships) => {
    return ships.every((ship) => ship.isSunk());
  };
  

  // Create the initial game board
  for (let i = 0; i < 10; i++) {
    board.push(Array(10).fill(undefined));
  };

  return {
    board,
    missedAttacks,
    placeShip,
    receiveAttack,
    allShipsSunk,
    getAttackStatus
  };
};

export default createGameboard;