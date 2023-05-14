import ship from "./ship";

const createGameboard = () => {

  const ships = {
    carrier: ship("carrier", 5),
    battleship: ship("battleship", 4),
    cruiser: ship("cruiser", 3),
    destroyer: ship("destroyer", 2),
  };
  
  const getAttackStatus = ({ row, column }) => {
    return board[row][column]?.attacked;
  };  
  
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
      board[cell.row][cell.column] = ship.id;
    });
  
    ships[ship.id] = { ...ship, cells: shipCells }; // Store ship cells along with the ship object
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
    return shipId;
  };
  
  const allShipsSunk = () => {
    return Object.values(ships).every((ship) => ship.isSunk());
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