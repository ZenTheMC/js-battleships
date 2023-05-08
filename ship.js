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

    // hit
    const hits = Array(length).fill(null);  // [null, null, null]  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    const hit = (i) => (hits[i] = "hit");  // hit(0) => ["hit", null, null] (this "accesses" `hits` to set a new value)
    const getHits = () => hits;  // accesses and returns `hits`

    // isSunk
    const isSunk = () => hits.every((hit) => hit === "hit");  // ["hit", "hit", "hit"] => true; ["hit", null, "hit"] => false

    return { id, length, hit, getHits, isSunk }; // creates a new object with all of those properties from above

};

/* Pretty sure this error handling logic keeps breaking the other ship tests.
   I would bet it's most likely a scope issue because I get different results after running npm test depending on where I place it inside the 'ship' function
   Might be an issue where I'm not handling the statements properly too, because the return on line 22 gets disabled when I have this logic before it, and vise versa(maybe 'else'?)

// Illegal move - Error Handling
if ((hit(1) && hit(1)) || (hit(2) && hit(2)) || (hit(3) && hit(3)) || (hit(4) && hit(4)) || (hit(5) && hit(5))) {
    return "Illegal move, can't guess the same coordinate again!"
};

*/

export default ship;
