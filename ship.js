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

    let direction = "horizontal";  // TODO: remove this from ship

    const getDirection = () => direction;  // TODO: Consider removing this from ship
    const changeDirection = () => {  // TODO: 
        direction === "horizontal" ? (direction = "vertical") : (direction = "horizontal");
    };

    // hit
    const hits = Array(length).fill(null);  // [null, null, null]  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    const hit = (i) => (hits[i] = "hit");  // hit(0) => ["hit", null, null] (this "accesses" `hits` to set a new value)
    const getHits = () => hits;  // accesses and returns `hits`

    // isSunk
    const isSunk = () => hits.every((hit) => hit === "hit");  // ["hit", "hit", "hit"] => true; ["hit", null, "hit"] => false
    
    return { id, length, hit, getHits, isSunk, getDirection, changeDirection }; // creates a new object with all of those properties from above
};

export default ship;
