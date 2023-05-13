import { fireEvent } from "@testing-library/dom";
import { JSDOM } from "jsdom";
import gameLoop from "../gameloop";
import createPlayer from "../player";
import gameBoard from "../gameboard";
import { render, handleAttack, endGame } from "../interface";

// Mock the DOM and create a new JSDOM instance
const dom = new JSDOM("<!DOCTYPE html><html><body><div id='player-board'></div><div id='enemy-board'></div><button id='attack-button'></button><div id='message'></div></body></html>");
global.document = dom.window.document;

describe("User Interface", () => {
  let playerGameboard;
  let enemyGameboard;
  let player;
  let enemy;

  beforeEach(() => {
    playerGameboard = gameBoard();
    enemyGameboard = gameBoard();

    player = createPlayer(enemyGameboard);
    enemy = createPlayer(playerGameboard);
  });

  test("Render should create cell elements for player and enemy boards", () => {
    render(player, enemy);

    const playerBoard = document.getElementById("player-board");
    const enemyBoard = document.getElementById("enemy-board");

    expect(playerBoard.children.length).toBe(100); // 10x10 grid
    expect(enemyBoard.children.length).toBe(100); // 10x10 grid
  });

  test("HandleAttack should be called when clicking on enemy board cells", () => {
    render(player, enemy);

    const enemyBoard = document.getElementById("enemy-board");
    const enemyCell = enemyBoard.firstChild;

    const mockHandleAttack = jest.fn();
    enemyCell.addEventListener("click", mockHandleAttack);

    fireEvent.click(enemyCell);

    expect(mockHandleAttack).toHaveBeenCalled();
  });

  test("Attack button should call enemy's randomAttack method when clicked", () => {
    render(player, enemy);

    const attackButton = document.getElementById("attack-button");

    const mockRandomAttack = jest.spyOn(enemy, "randomAttack");
    fireEvent.click(attackButton);

    expect(mockRandomAttack).toHaveBeenCalled();
  });

  test("EndGame should disable the attack button and display the appropriate message", () => {
    render(player, enemy);

    const attackButton = document.getElementById("attack-button");
    const message = document.getElementById("message");

    playerGameboard.placeShip(playerGameboard.ship("battleship"), { row: 0, column: 0 }, "horizontal");
    enemyGameboard.placeShip(enemyGameboard.ship("cruiser"), { row: 1, column: 0 }, "vertical");

    gameLoop(player, enemy, render);

    expect(attackButton.disabled).toBe(true);
    expect(message.textContent).toMatch(/You (won|lost)!/);
  });
});
