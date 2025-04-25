export function isFilled(board) {
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (board[i][j] === "" ) {
              return false;
          }
      }
  }
  return true;
}

function isValid(board, row, col, num) {
  // Check row and col
  for (let i = 0; i < board.length; i++) {
      if (board[row][i] === num && i !== col) {
          return false;
      }
      if (board[i][col] === num && i !== row) {
          return false;
      }
  }
  // Check block
  let blockRowStPt = Math.floor(row / 3) * 3;
  let blockColStPt = Math.floor(col / 3) * 3;

  for (let i = blockRowStPt; i < blockRowStPt + 3; i++) {
      for (let j = blockColStPt; j < blockColStPt + 3; j++) {
          if (board[i][j] === num && (i !== row || j !== col)) {
              return false;
          }
      }
  }
  return true;
}

function solveSudokuHelper(board) {
  if (isFilled(board)) {
    return JSON.parse(JSON.stringify(board)); // Return a copy
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === "") {
        for (let k = 1; k <= 9; k++) {
          const num = k.toString();
          if (isValid(board, i, j, num)) {
            board[i][j] = num;
            const result = solveSudokuHelper(board);
            if (result) return result; // Propagate solution upward
            board[i][j] = ""; // Backtrack
          }
        }
      }
    }
  }
  return null; // No empty cells left (shouldn’t happen if isFilled works)
}
export function solveSudoku(board) {
  
  return new Promise((resolve, reject) => {
      try {
          const solution = solveSudokuHelper(board);
          if (solution) {
              resolve(solution);
          } else {
              reject(new Error("No solution exists"));
          }
      } catch (error) {
          reject(error);
      }
  });
}