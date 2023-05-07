/*
`Game` module ("main game loop") :
-Create 2 players
-Create 2 `Gameboards` (one for each player)
Method to set up a new game :
-Has to track whose turn it currently is (which gameboard is the "enemy" gameboard this turn) 2) Win/lose end condition once one player's ships are all sunk (aka when a whole `Gameboard` has no ships left)
*/

// `Game` module ("main game loop")
const gameLoop = (() => {

    // Create 2 players
    const player1 = Object.create(Player);
    const player2 = Object.create(Player);

    // Create 2 `Gameboards` (one for each player)
    const gameBoard1 = createGameBoard();
    const gameBoard2 = createGameBoard();

    // Populate boards with pre-determined coordinates logic

    // Render game boards using UI module logic

    // Game loop logic
    while (!gameBoard1.allShipsSunk() && !gameBoard2.allShipsSunk()) {
        // Take turns attacking logic
    };

    // End the game logic
})();

export default gameLoop;