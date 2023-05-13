import createGameBoard from "./gameboard";
import createPlayer from "./player";
import gameLoop from "./gameloop";

// Get DOM elements
const playerBoard = document.getElementById("player-board");
const enemyBoard = document.getElementById("enemy-board");
const attackButton = document.getElementById("attack-button");
const message = document.getElementById("message");

// Create game boards and players
const playerGameboard = createGameBoard();
const enemyGameboard = createGameBoard();

const player = createPlayer(enemyGameboard);
const enemy = createPlayer(playerGameboard);

// Function to create a cell element
const createCellElement = (row, col, isPlayerBoard) => {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.row = row;
  cell.dataset.col = col;

  if (!isPlayerBoard) {
    cell.addEventListener("click", () => handleAttack(row, col));
  }

  return cell;
};

// Function to render the game boards
const render = () => {
  playerBoard.innerHTML = "";
  enemyBoard.innerHTML = "";

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const playerCell = createCellElement(row, col, true);
      playerBoard.appendChild(playerCell);

      const enemyCell = createCellElement(row, col, false);
      enemyBoard.appendChild(enemyCell);
    }
  }
};

// Function to handle attack when clicking on enemy board cells
const handleAttack = (row, col) => {
  if (!attackButton.disabled) {
    player.randomAttack();
    render();

    if (playerGameboard.allShipsSunk() || enemyGameboard.allShipsSunk()) {
      endGame();
    }
  }
};

// Function to disable the attack button and display the final message
const endGame = () => {
  attackButton.disabled = true;
  const messageText = playerGameboard.allShipsSunk() ? "You won!" : "You lost!";
  message.textContent = messageText;
};

// Add event listener to the attack button
attackButton.addEventListener("click", () => {
  enemy.randomAttack();
  render();

  if (playerGameboard.allShipsSunk() || enemyGameboard.allShipsSunk()) {
    endGame();
  }
});

// Initial rendering of the game boards
render();

// Start the game loop
gameLoop(player, enemy, render);

export default render;