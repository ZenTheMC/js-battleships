import gameBoard from "./gameboard";

// Player factory function
const createPlayer = (gameBoard) => {
    const randomAttack = () => {
        const { row, column } = getRandomCoordinates();
        gameBoard.receiveAttack({ row, column });
    };

    const getRandomCoordinates = () => {
        const row = Math.floor(Math.random() * 10);
        const column = Math.floor(Math.random() * 10);
        return { row, column };
    };

    return {
        randomAttack
    };
};

export default createPlayer;