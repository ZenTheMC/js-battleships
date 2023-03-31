// length object
export const ship_lengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
};

const ship = (type) => {
    const id = type;
    const length = ship_lengths[type];
    let direction = "horizontal";

    const getDirection = () => direction;
    const changeDirection = () => {
        direction === "horizontal" ? (direction = "vertical") : (direction = "horizontal");
    };

    // hit
    const hits = Array(length).fill(null);
    const hit = (i) => (hits[i] = "hit");
    const getHits = () => hits;

    // isSunk
    const isSunk = () => hits.every((h) => h === "hit");
    
    return { id, length, hit, getHits, isSunk, getDirection, changeDirection };
};

export default ship;