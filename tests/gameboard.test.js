import gameBoard from "../gameboard";
import ship from "../ship";

describe("Game Board initialization", () => { // This test case is done, and is passing!
    const gameBoardTest = gameBoard();
    test("Check to see if gameBoard exits", () => {
        expect(gameBoardTest.board).toEqual([]);
    });
});

describe("Place Ship Method", () => { // This test case is done, and is passing!
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

    test("placeShip should throw an error when placing ships in the same location", () => {
        const ship1 = ship("submarine");
        const ship2 = ship("destroyer");

        gameBoardTest.placeShip(ship1, coordinates, direction);

        expect(() => gameBoardTest.placeShip(ship2, coordinates, direction)).toThrow("Cannot place ship in the same location as another ship");
    });
});

/* describe("Coordinate Attribute", () => {
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
*/