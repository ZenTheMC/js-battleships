import gameBoard from "../gameboard"
import ship from "../ship";

describe("Game Board initialization", () => {
    const gameBoardTest = gameBoard();
    test("Check to see if gameBoard exits", () => {
        expect(gameBoardTest.board).toEqual([]);
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

describe("Place Ship Method", () => {
    const gameBoardTest = gameBoard();
    const shipTest = ship("battleship"); 
    test("Check to see if 'placeship' will take x and y as parameters and output a ship on the board using them as coordinates to place it at", () => {
        expect().toBe();
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