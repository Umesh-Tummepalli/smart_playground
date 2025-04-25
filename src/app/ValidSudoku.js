export function isValidSudoku(board, row, col, num) {
  let inValidStatus = {
    isValid: true,
    inValidRow: -1,
    inValidCol: -1,
    inValidBlock: [],
    inValidCell: [],
  };

  // If no number provided, return default valid status
  if (!num) {
    return inValidStatus;
  }

  // Check row
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === num && i !== col) {
      inValidStatus.isValid = false;
      inValidStatus.inValidRow = row;
      inValidStatus.inValidCell.push([row, i]);
      break;
    }
  }

  // Check column - Fixed bug here
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === num && i !== row) {
      inValidStatus.isValid = false;
      inValidStatus.inValidCol = col;
      inValidStatus.inValidCell.push([i, col]); // <-- This was incorrect in your code
      break;
    }
  }

  // Check block
  let blockRowStPt = Math.floor(row / 3) * 3;
  let blockColStPt = Math.floor(col / 3) * 3;
  
  for (let i = blockRowStPt; i < blockRowStPt + 3; i++) {
    for (let j = blockColStPt; j < blockColStPt + 3; j++) {
      if (board[i][j] === num && (i !== row || j !== col)) {
        inValidStatus.isValid = false;
        inValidStatus.inValidBlock = [blockRowStPt, blockColStPt];
        inValidStatus.inValidCell.push([i, j]);
        break;
      }
    }
  }
if(!inValidStatus.isValid){
  inValidStatus.inValidCell.push([row,col]);
}
  return inValidStatus;
}

export function fullValidSudoku(board) {
  // Check rows and columns
  for (let i = 0; i < board.length; i++) {
    let map = {},
        map2 = {};
    for (let j = 0; j < board[0].length; j++) {
      // Skip empty cells
      if (board[i][j]) {
        if (map[board[i][j]]) {
          return {
            isValid: false,
            inValidRow: i,
            inValidCol: -1,
            inValidBlock: [],
            inValidCell: [[i, j],map[board[i][j]]],
          };
        }
        map[board[i][j]] = [i,j];
      }
      
      if (board[j][i]) {
        if (map2[board[j][i]]) {
          return {
            isValid: false,
            inValidRow: -1,
            inValidCol: i,
            inValidBlock: [],
            inValidCell: [[j, i],map2[board[j][i]]],
          };
        }
        map2[board[j][i]] = [j,i];
      }
    }
  }

  // Check 3x3 blocks
  const blockStartPoints = [
    [0, 0], [0, 3], [0, 6],
    [3, 0], [3, 3], [3, 6],
    [6, 0], [6, 3], [6, 6],
  ];
  
  for (let k = 0; k < blockStartPoints.length; k++) {
    let currBlock = blockStartPoints[k];
    let rowSt = currBlock[0];
    let colSt = currBlock[1];
    let map = {};
    
    for (let i = rowSt; i < rowSt + 3; i++) {
      for (let j = colSt; j < colSt + 3; j++) {
        if (board[i][j]) {
          if (map[board[i][j]]) {
            return {
              isValid: false,
              inValidRow: -1,
              inValidCol: -1,
              inValidBlock: [rowSt, colSt],
              inValidCell: [[i, j],map[board[i][j]]],
            };
          }
          map[board[i][j]] = [i,j];
        }
      }
    }
  }

  return {
    isValid: true,
    inValidRow: -1,
    inValidCol: -1,
    inValidBlock: [],
    inValidCell: [],
  };
}

export function isFilled(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "" || board[i][j]===0) {
        return false;
      }
    }
  }
  return true;
}