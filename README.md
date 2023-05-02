# js-battleships

First project built with TDD

https://www.theodinproject.com/lessons/node-path-javascript-battleship

## Design

Part I => basic functionality

`Ship` factory function: has to return a ship object

Ship objects have 3 attributes:

- length (number)
- num hits (integer; non-negative integer)
- sunk/not sunk (boolean)

Ship objects have two methods:

- `hit`: increments num hits
- `isSunk`: takes as parameters a ship object (with a length and a number of hits) and outputs a boolean representing if it's sunk

`Gameboard` factory function: has to return a gameboard object

Gameboard objects need to have some attributes:

- array (or something) of already-guessed coordinates that were misses (this will start out empty)

Gameboard objects need to have X methods:

- init (prepopulate with a size)
- the ship factory function
- ship placement (parameters: x coord, y coord -> output: a ship, on the board)
  - note: may want to make ship placement drag-and-drop capable
- `receiveAttack`: parameters: (x coord, y coord) and gameboard current state
  - check if (x, y) has already been guessed
    - if yes, the move is illegal (data validation on user input)
  - logic: determine if a ship object is at (x, y)
  - if a ship exists, call its `hit` method
  - if a ship doesn't exist, "record" the missed shot's (x, y) coordinates. (for the UI, to show the user what guesses they already made)

- tracking gameboard state: where are we going to "record" or store information about the current gameboard state?
  - all missed attacks (maybe it's an array, maybe a lookup table...)
  - whether there are any ships left (or everything is sunk)

- enhancement: keep a history of moves so you can have an "undo" button

`Player` object: one human, one "AI"/computer

- computer player must be able to
  - make random plays
  - know what moves are legal

- enhancement: make it multiplayer

`Game` module ("main game loop")

- method to set up a new game
  - create 2 players
  - create 2 `Gameboards` (one for each player)
- has to track whose turn it currently is (which gameboard is the "enemy" gameboard this turn)
- win/lose end condition - once one player's ships are all sunk (aka when a whole `Gameboard` has no ships left)


Part 2 => UI:

- display both players' gameboards (using `Gameboard` class)
- take user input for attacks (click on coordinate)