import gameBoard from "./gameboard";
import createPlayer from "./player";

// `Game` module ("main game loop")
const gameLoop = (player1, player2, render) => {

    const gameboard1 = gameBoard();
    const gameboard2 = gameBoard();

    let currentPlayer = player1;
    let gameOver = false;

    while (!gameOver) {
        currentPlayer.randomAttack();
        render();

        if (currentPlayer === player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        };

        if (player1.gameboard.allShipsSunk() || player2.gameboard.allShipsSunk()) {
            gameOver = true;
        };
    };
};

export default gameLoop;