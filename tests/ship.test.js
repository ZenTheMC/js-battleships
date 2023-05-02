import ship from "./tests/ship";

describe("Ship factory function properties tests", () => {
    const shipTest = ship("battleship");
    test("id", () => {
        expect(shipTest.id).toBe("battleship");
    });
    test("length", () => {
        expect(shipTest.length).toBe(4);
    });
    test("direction", () => {
        expect(shipTest.getDirection()).toBe("horizontal");  // TODO: Remove these tests if this functionality is removed from ship
    });
    test("change direction", () => {
        shipTest.changeDirection();
        expect(shipTest.getDirection()).toBe("vertical");
    });
});

describe("Hit function tests", () => {
    const shipTest = ship("submarine");
    test("no hits", () => {
        expect(shipTest.getHits()).toEqual([null, null, null]);
    });
    test("one hit", () => {
        shipTest.hit(2);
        expect(shipTest.getHits()).toEqual([null, null, "hit"]);
    });
    test("invalid hit: can't hit same index twice", () => {  // TODO: Add a unit test for this validation
        shipTest.hit(1);
        shipTest.hit(1);  // should not be able to hit a sunk ship
        // expect an error
        });
});

describe("isSunk function tests", () => {
    const shipTest = ship("destroyer");
    test("not sunk", () => {
        expect(shipTest.isSunk()).toBe(false);
    });
    test("hit but not sunk", () => {
        shipTest.hit(0);
        expect(shipTest.isSunk()).toBe(false);
    });
    test("sunk", () => {
        shipTest.hit(1);
        expect(shipTest.isSunk()).toBe(true);
    });
});