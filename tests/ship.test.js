import ship from "../ship";

describe("Ship factory function properties tests", () => {
  test("battleship length should be 4", () => {
    const battleship = ship("battleship");
    expect(battleship.length).toBe(4);
  });
});

describe("Hit function tests", () => {
  let submarine;

  beforeEach(() => {
    submarine = ship("submarine");
  });

  test("submarine should have no hits initially", () => {
    expect(submarine.getHits()).toEqual([null, null, null]);
  });

  test("submarine should register a hit at index 2", () => {
    submarine.hit(2);
    expect(submarine.getHits()).toEqual([null, null, "hit"]);
  });

  test("invalid hit: can't hit same index twice", () => {
    shipTest.hit(1);
    expect(() => shipTest.hit(1)).toThrow("Illegal move, can't guess the same coordinate again!");
    expect(shipTest.getHits()).toEqual([null, null, "hit"]);
  });
});

describe("isSunk function tests", () => {
  let destroyer;

  beforeEach(() => {
    destroyer = ship("destroyer");
  });

  test("destroyer should not be sunk initially", () => {
    expect(destroyer.isSunk()).toBe(false);
  });

  test("destroyer should be sunk after two hits", () => {
    destroyer.hit(0);
    destroyer.hit(1);
    expect(destroyer.isSunk()).toBe(true);
  });
});
