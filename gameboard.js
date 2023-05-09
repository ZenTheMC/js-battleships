import ship from "./ship";

// Factory function that is supposed to return a Gameboard object
const gameBoard = () => {

    const board = [];

    // Function to place ships at specific coordinates
    const placeShip = (ship, coordinates, direction) => {
        const { row, column } = coordinates;
        const shipCells = [];

        // Determine the cells occupied by the ship based on direction and ship length
        if (direction === "horizontal") {
            for (let i = column; i < column + ship.length; i++) {
                shipCells.push({ row, column: i});
            };
        } else if (direction === "vertical") {
            for (let i = row; i < row + ship.length; i++) {
                shipCells.push({ row: i, column });
            };
        };

        // Check if any of the ship cells are already occupied by another ship
        const overlappingShip = shipCells.find(cell => board[cell.row][cell.column] === "ship");
        if (overlappingShip) {
            throw new Error("Cannot place ship in the same location as another ship");            
        };

        // Mark the ship cells as occupied by the ship
        shipCells.forEach(cell => {
            board[cell.row][cell.column] = "ship";
        });
        
        // Maybe need to return { placeShip }; ? but maybe not needed cause thats being done at the end of the gameBoard function
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