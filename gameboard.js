import ship from "./ship";

// Factory function that is supposed to return a Gameboard object
const gameBoard = () => {

    const board = [];

    const placeShip = (ship, coordinates) => { // ship placement (parameters: coordinates, ship) -> (ship on the board)
        /*
        Ship placement logic :
        -Generate a random starting coord on board 
        -Determine a random direction(hor/vert) to place ship 
        -Check if the selected coord and direc are valid for placing ship : it has to fit within the board bounds and not overlap with other ships 
        -If coords and direc are valid, mark cells on board when occupied by newly placed ship
        */
    };

    const receiveAttack = (coordinates) => { // receive attack (parameters: coordinates) and track gameboard current state(missed shots)
        // receive attack logic
    };
    
    const allShipsSunk = () => { // all ships sunk ? (Is this needed? Can I use the imported isSunk function from ship.js?) -Discuss!!!
        // all ships sunk logic
    };

    return {
        board,
        placeShip,
        receiveAttack,
        allShipsSunk
    };

    /* Possible other things to add!
        coordinates: [], // (x,y) - stores guessed coordinates, therefore starts out empty
        populate: Array.from({length:50},()=> ({})), // Init to pre-populate with a size (50 is just a placeholder)
        ship() {}, // the ship factory function imported: to use stuff from that .js file, like isSunk, ship lengths for adding to board, etc.?
        guesscheck(x,y) {}, // check if (x, y) has already been guessed, if yes, the move is illegal (data validation on user input)
    */

    /* logic: determine if a ship object is at (x, y)
     - if a ship exists, call its `hit` method
     - if a ship doesn't exist, "record" the missed shot's (x, y) coordinates. (for the UI, to show the user what guesses they already made)
     - tracking gameboard state: where are we going to "record" or store information about the current gameboard state?
     - all missed attacks (maybe it's an array, maybe a lookup table...)
     - whether there are any ships left (or everything is sunk)
     - enhancement: keep a history of moves so you can have an "undo" button
    */
};

export default gameBoard;