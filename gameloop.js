import createGameBoard from "./gameboard";
import createPlayer from "./player";

const gameLoop = (player1, player2, render) => {

  // Create game boards and players
  const playerGameboard = createGameBoard();
  const enemyGameboard = createGameBoard();

  const player = createPlayer(enemyGameboard);
  const enemy = createPlayer(playerGameboard);

  let currentPlayer = player1;
  let gameOver = false;

  while (!gameOver) {
    currentPlayer.randomAttack();
    render();

    currentPlayer = currentPlayer === player1 ? player2 : player1;

    if (player1.gameboard.allShipsSunk() || player2.gameboard.allShipsSunk()) {
      gameOver = true;
    }
  }
};

export default gameLoop;