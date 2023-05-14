import createGameBoard from "./gameboard";

const createPlayer = (gameBoard) => {
  const randomAttack = () => {
    let { row, column } = getRandomCoordinates();
    while (gameBoard.getAttackStatus({ row, column })) {
      ({ row, column } = getRandomCoordinates());
    }
    gameBoard.receiveAttack({ row, column });
  };

  const getRandomCoordinates = () => {
    const row = Math.floor(Math.random() * 10);
    const column = Math.floor(Math.random() * 10);
    return { row, column };
  };

  return {
    randomAttack,
    gameboard: gameBoard
  };
};

export default createPlayer;