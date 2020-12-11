document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    // lets start at the top left
    {
      row: 0,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 0,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 0,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 0,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    // now lets start on the second row going accross.
    {
      row: 1,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 1,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 1,
      col: 3,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 1,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 1,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    // now we have the third row starting on the left
    {
      row: 2,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 2,
      col: 1,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 2,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 2,
      col: 4,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 2,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    // and here is the fourth row starting from the left
    {
      row: 3,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 3,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 3,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 3,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 3,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 3,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    // and the fifth row comes along here.
    {
      row: 4,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 4,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 4,
      col: 2,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 4,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 4,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 4,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    // and now the final row, the sixth row starts here
    {
      row: 5,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 5,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 5,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 5,
      col: 3,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 5,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
    {
      row: 5,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 2
    },
  ]
}

function startGame () {
  for(var i = 0; i < board.cells.length; i ++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  } // close the for loop

  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
} // close function startGame

// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  var minesThatAreMarked = 0;
  var cellsThatAreCleared = 0;
  var i =0;
  while (i < board.cells.length) {
    if (board.cells[i].isMarked == true && board.cells[i].isMine == true) {
      minesThatAreMarked ++;
    } else if (board.cells[i].hidden == false && board.cells[i].isMine == false) {
      cellsThatAreCleared ++;
    }
    i ++;
  }// close while loop
  if (minesThatAreMarked + cellsThatAreCleared == board.cells.length) {
    lib.displayMessage('You have won!');
  } // close if
} // close function checkForWin()

// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  var isMineTrueCounter = 0;

  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine === true) {
      isMineTrueCounter ++;
    }
  } // close for loop
  return isMineTrueCounter;
} // close function countSurroundingMines