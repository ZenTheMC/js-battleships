import createGameBoard from "./gameboard";

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
    gameboard: gameBoard, // Add the gameboard property
    randomAttack,
  };
};


export default createPlayer;