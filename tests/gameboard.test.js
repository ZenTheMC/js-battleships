import gameBoard from "../gameboard";
import ship from "../ship";

describe("Game Board initialization", () => { // This test case is done, and is passing!
    const gameBoardTest = gameBoard();
    test("Check to see if gameBoard exits", () => {
        expect(gameBoardTest.board).toEqual([]);
    });
});

describe("Place Ship Method", () => { // This test case is done, and is passing!
    
    test("Check to see if 'placeship' will output a ship on the board", () => {
        const gameBoardTest = gameBoard();
        const shipTest = ship("cruiser");
        const coordinates = { row: 3, column: 5 };
        const direction = "horizontal";

        gameBoardTest.placeShip(shipTest, coordinates, direction);

        expect(gameBoardTest.overlappingShip(3,5)).toBe(true);
        expect(gameBoardTest.overlappingShip(3,6)).toBe(true);
        expect(gameBoardTest.overlappingShip(3,7)).toBe(true);
    });

    test("placeShip should throw an error when placing ships in the same location", () => {
        const ship1 = ship("submarine");
        const ship2 = ship("destroyer");

        gameBoardTest.placeShip(ship1, coordinates, direction);

        expect(() => gameBoardTest.placeShip(ship2, coordinates, direction)).toThrow("Cannot place ship in the same location as another ship");
    });
});

describe("Receive Attack Method", () => {
    
    test("Check to see if 'receiveAttack' correctly handles attacks and records missed shots", () => {
        const gameBoardTest = gameBoard();
        const shipTest = ship("cruiser");
        const shipCoordinates = { row: 3, column: 5 };
        const missedCoordinates = { row: 4, column: 4 };

        gameBoardTest.placeShip(ship, shipCoordinates, "horizontal");
        gameBoardTest.receiveAttack(shipCoordinates);
        gameBoardTest.receiveAttack({ row: 3, column: 6 });
        gameBoardTest.receiveAttack(missedCoordinates);

        expect(shipTest.getHits).toBe(2);
        expect(gameBoardTest.missedAttacks).toContainEqual(missedCoordinates);
    });
});

describe("All Ships Sunk Method", () => {

    test("Check to see if 'populate' will initialize to pre-populate with a size", () => {
        const gameBoardTest = gameBoard();
        const ship1 = ship("destroyer");
        const ship2 = ship("submarine");

        gameBoardTest.placeShip(ship1, { row: 0, column: 0 }, "horizontal");
        gameBoardTest.placeShip(ship2, { row: 2, column: 1 }, "vertical");
        
        ship1.hit();
        ship1.hit();
        ship2.hit();
        ship2.hit();
        ship2.hit();

        expect(gameBoardTest.allShipsSunk()).toBe(true);
    });
});