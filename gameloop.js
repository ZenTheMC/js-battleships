const gameLoop = (() => { // `Game` module ("main game loop")
    return {
        players() {}, // create 2 players (attribute or method? Currently a method, could do player1 and player2 separately and store as attributes or maybe a method to make both?)
        playergameboards() {}, // create 2 `Gameboards` (one for each player) (attribute or method? Currently a method, could do board1 and board2 separately and store as attributes or maybe a method to make both?)
        newgame() {}, // method to set up a new game : 1) Has to track whose turn it currently is (which gameboard is the "enemy" gameboard this turn) 2) Win/lose end condition once one player's ships are all sunk (aka when a whole `Gameboard` has no ships left)
    };
})();

export default gameLoop;