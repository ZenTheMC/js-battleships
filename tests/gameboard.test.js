import gameBoard from "../gameboard";
import ship from "../ship";

describe("Game Board initialization", () => { // This test case is done, and is passing fine, hopefully for the right reasons :)
    const gameBoardTest = gameBoard();
    test("Check to see if gameBoard exits", () => {
        expect(gameBoardTest.board).toEqual([]);
    });
});

describe("Place Ship Method", () => { // This test case is done, need to implement placeShip logic in gameboard.js file to have it pass
    const gameBoardTest = gameBoard();
    const shipTest = ship("cruiser");
    const coordinates = { row: 3, column: 5};
    const direction = "horizontal";

    gameBoardTest.placeShip(shipTest, coordinates, direction);

    test("Check to see if 'placeship' will output a ship on the board", () => {
        expect(gameBoardTest.isShipOccupyingCell(3,5)).toBe(true);
        expect(gameBoardTest.isShipOccupyingCell(3,6)).toBe(true);
        expect(gameBoardTest.isShipOccupyingCell(3,7)).toBe(true);
    });
});

describe("Coordinate Attribute", () => {
    const gameBoardTest = gameBoard();
    test("Check to see if 'coordinates' will store guessed coordinates within an array", () => {
        expect().toBe();
    });
});

describe("Populate Attribute/Method?", () => {
    const gameBoardTest = gameBoard();
    test("Check to see if 'populate' will initialize to pre-populate with a size", () => {
        expect().toBe([]);
    });
});

describe("Receive Attack Method", () => { 
    const gameBoardTest = gameBoard();
    test("Check to see if 'receiveattack' will take x and y as parameters and record them along with the current game state", () => {
        expect().toBe();
    });
});

describe("Guess Check Method", () => {
    const gameBoardTest = gameBoard();
    test("Check to see if 'guesscheck' will take x and y, then check if it was already guessed, if yes, the move is illegal, so data validation upon user input", () => {
        expect().toBe();
    });
});