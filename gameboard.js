const gameBoard = () => {
    // Factory function that is supposed to return a Gameboard object

    /* Gameboard object has to have the following attributes:
    - An array of guessed coordinates that missed (Starts out empty, cause no guesses) */

    /* Gameboard object has to have the following methods:
    - Init to pre-populate with a size
    - the ship factory function
    - ship placement (parameters: x coord, y coord -> output: a ship, on the board)
    - `receiveAttack`: parameters: (x coord, y coord) and gameboard current state
    - check if (x, y) has already been guessed
    - if yes, the move is illegal (data validation on user input)
    - logic: determine if a ship object is at (x, y)
    - if a ship exists, call its `hit` method
    - if a ship doesn't exist, "record" the missed shot's (x, y) coordinates. (for the UI, to show the user what guesses they already made)
    - tracking gameboard state: where are we going to "record" or store information about the current gameboard state?
    - all missed attacks (maybe it's an array, maybe a lookup table...)
    - whether there are any ships left (or everything is sunk)
    - enhancement: keep a history of moves so you can have an "undo" button
    */
};

export default gameBoard;