import ship from "./ship";

const gameBoard = () => {
    // Factory function that is supposed to return a Gameboard object
    return {
        coordinates: [], // (x,y) - stores guessed coordinates, therefore starts out empty
        populate: Array.from({length:50},()=> ({})), // Init to pre-populate with a size (50 is just a placeholder)
        ship() {}, // the ship factory function
        placeship(x,y) {}, // ship placement (parameters: x coord, y coord -> output: a ship, on the board)
        receiveattack(x,y,state) {}, // `receiveAttack`: parameters: (x coord, y coord) and gameboard current state
        guesscheck(x,y) {}, // check if (x, y) has already been guessed, if yes, the move is illegal (data validation on user input)
    
    /* logic: determine if a ship object is at (x, y)
     - if a ship exists, call its `hit` method
     - if a ship doesn't exist, "record" the missed shot's (x, y) coordinates. (for the UI, to show the user what guesses they already made)
     - tracking gameboard state: where are we going to "record" or store information about the current gameboard state?
     - all missed attacks (maybe it's an array, maybe a lookup table...)
     - whether there are any ships left (or everything is sunk)
     - enhancement: keep a history of moves so you can have an "undo" button
    */

    };
};

export default gameBoard;