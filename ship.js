const ship_lengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
};
  
const ship = (type) => {
    const id = type;
    const length = ship_lengths[type];
    const hits = Array(length).fill(null);
  
    const hit = (index) => {
      if (hits[index] === "hit") {
        throw new Error("Illegal move, can't guess the same coordinate again!");
      }
      hits[index] = "hit";
    };
  
    const getHits = () => hits.slice();
  
    const isSunk = () => hits.every((hit) => hit === "hit");
  
    return { id, length, hit, getHits, isSunk };
};
  
export default ship;  