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

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
TO-DO:
On meeting with Ray on Friday:
-Look at gameboard, gameboardtest, gameloop, gamelooptest, player, playertest
-Look through the pseudo-code for the logic, and the syntax of the factory functions and modules and objects within
-Look at the tests written in gameboard test "conceptually", then "syntactically", then actually talk through what is right about them and what is wrong
-Then refactor all existing new code since our last meeting on Monday, or at least gameboard, and maybe get started on gameloop, so then player and UI are easier for me to get some pattern recognition on
-Make sure to explain your thought process on your current new changes, and also read out the notes inside the .js files that could help elaborate on what you were going for when you initially wrote them
-Remember to tell Ray that you DID NOT want to look up any "help" or similar projects, whether through ODIN classmates, or other unrelated Battleship projects, simply because you think you will learn wayyyyyyy more and wayyyyyyyy better if you come up with the solutions yourself, or at least working through the solution brainstorming process with Ray's guidance, because that is how you learned best with TDD basics, and with our previous 3-4 hour Monday session where I learned like 10 different big important things, one of which, I am currently utilizing right now!! Right here!!! And also have utilized on all my study sessions since, drastically improving my productivity.
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!