import gameBoard from "./gameboard";
import createPlayer from "./player";

const gameLoop = (player1, player2, render) => {
  const gameboard1 = gameBoard();
  const gameboard2 = gameBoard();

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