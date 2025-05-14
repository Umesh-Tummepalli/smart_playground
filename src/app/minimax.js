function winner(board) {
  const n = board.length;

  // Check rows and columns
  for (let i = 0; i < n; i++) {
      let rowSet = new Set();
      let colSet = new Set();
      for (let j = 0; j < n; j++) {
          rowSet.add(board[i][j]);
          colSet.add(board[j][i]);
      }
      if (rowSet.size === 1 && rowSet.has('X')) return 'X';
      if (rowSet.size === 1 && rowSet.has('O')) return 'O';
      if (colSet.size === 1 && colSet.has('X')) return 'X';
      if (colSet.size === 1 && colSet.has('O')) return 'O';
  }

  // Check main diagonal
  let mainDiagSet = new Set();
  for (let i = 0; i < n; i++) {
      mainDiagSet.add(board[i][i]);
  }
  if (mainDiagSet.size === 1 && mainDiagSet.has('X')) return 'X';
  if (mainDiagSet.size === 1 && mainDiagSet.has('O')) return 'O';

  // Check anti-diagonal
  let antiDiagSet = new Set();
  for (let i = 0; i < n; i++) {
      antiDiagSet.add(board[i][n - 1 - i]);
  }
  if (antiDiagSet.size === 1 && antiDiagSet.has('X')) return 'X';
  if (antiDiagSet.size === 1 && antiDiagSet.has('O')) return 'O';

  return '.';
}

function boardFilled(board) {
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (board[i][j] !== 'X' && board[i][j] !== 'O') {
              return false;
          }
      }
  }
  return true;
}

function minimaxHelper(board, isMax, currVal, needVal) {
  const checkwin = winner(board);
  if (checkwin !== '.' && checkwin === needVal) {
      return 1;
  } else if (checkwin !== '.' && checkwin !== needVal) {
      return -1;
  }
  if (boardFilled(board)) {
      return 0;
  }

  let val = isMax ? -Infinity : Infinity;
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
          if (board[i][j] === '.') {
              board[i][j] = currVal;
              const store = minimaxHelper(board, !isMax, currVal === 'X' ? 'O' : 'X', needVal);
              if (isMax) {
                  val = Math.max(store, val);
              } else {
                  val = Math.min(val, store);
              }
              board[i][j] = '.'; // Undo move
          }
      }
  }
  return val;
}

function minimax(board, val) {
  return new Promise((resolve) => {
    let place = [-1, -1]; // Default invalid move
    let score = -Infinity;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === '.') {
          board[i][j] = val; // Make the move
          const tempScore = minimaxHelper(board, false, val === 'X' ? 'O' : 'X', val); // Opponent minimizes
          if (tempScore > score) {
            score = tempScore;
            place = [i, j];
          }
          board[i][j] = '.'; // Undo the move
        }
      }
    }
    if (place[0] !== -1 && place[1] !== -1) {
      board[place[0]][place[1]] = val; // Apply the best move
    }
    resolve(board); // Resolve the Promise with the updated board
  });
}
export { minimax, winner as checkwin, boardFilled };