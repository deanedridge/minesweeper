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
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // Define the checkForWin function. It should loop through all of board.cells.
  var totalNumberOfCells = board.cells.length;
  //var totalNumberOf_isMine = 0;
  //var totalNumberOf_isMarked 0;
  //   For each cell, check to see if both .isMine and .isMarked are true. If any mine still
  // exists that isn't marked, the player hasn't won yet and you can return to exit out of the function.
  for (i = 0; i < totalNumberOfCells; i++){

    // if there are any cells containing mines, and any of then have the property isMarked 
    // set to false, then return out of function
    if ((board.cells[i].isMine === true) && (board.cells[i].isMarked === false)){
      // game has not yet been won, so return out of function
      return;
    }

    // If every mine is marked, but there are still cells with the hidden property set to true, the 
    // player hasn't won yet so lets return out of the function.
    if (board.cells[i].hidden === true){
      return;
    }
    
    // If both these criteria pass, the player has won! There's a displayMessage 
    // function call at the bottom of checkForWin you can use to tell them so.
    if ((board.cells[i].isMine === true) && (board.cells[i].isMarked === true) && (board.cells[i].hidden === false)){
      // You can use this function call to declare a winner (once you've
      // detected that they've won, that is!)
      //   lib.displayMessage('You win!')
      lib.displayMessage('You win!')
    }
  } // close for loop
} // close function checkForWin

// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  var isMineTrueCounter = 0;

  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine === true) {
      isMineTrueCounter ++;
    }
  }
  return isMineTrueCounter;
}