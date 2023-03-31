import ship from "./ship";

describe("Ship factory function properties tests", () => {
    const shipTest = ship("battleship");
    test("id", () => {
        expect(shipTest.id).toBe("battleship");
    });
    test("length", () => {
        expect(shipTest.length).toBe(4);
    });
    test("direction", () => {
        expect(shipTest.getDirection()).toBe("horizontal");
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