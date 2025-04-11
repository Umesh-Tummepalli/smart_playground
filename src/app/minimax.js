function winner(board) {
  const winningPositions = [
      // Rows
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // Columns
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // Diagonals
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
  ];

  for (let i = 0; i < winningPositions.length; i++) {
      const [p1, p2, p3] = winningPositions[i];
      if (board[p1[0]][p1[1]] === 'X' && board[p2[0]][p2[1]] === 'X' && board[p3[0]][p3[1]] === 'X') {
          return 'X';
      }
      if (board[p1[0]][p1[1]] === 'O' && board[p2[0]][p2[1]] === 'O' && board[p3[0]][p3[1]] === 'O') {
          return 'O';
      }
  }
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
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
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

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
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