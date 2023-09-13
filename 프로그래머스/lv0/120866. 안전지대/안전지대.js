function solution(board) {
  let result = 0;
  let test = 0;

    board.forEach((a, x) => {
    a.forEach((b, y) => {
      if (b === 1) {
        if (x !== 0) {
          if (board[x - 1][y - 1] === 0) {
            board[x - 1].splice(y - 1, 1, 2);
          }
          if (board[x - 1][y] === 0) {
            board[x - 1].splice(y, 1, 2);
          }
          if (board[x - 1][y + 1] === 0) {
            board[x - 1].splice(y + 1, 1, 2);
          }
        }
        if (board[x][y - 1] === 0) {
          board[x][y - 1] = 2;
        }
        if (board[x][y + 1] === 0) {
          board[x][y + 1] = 2;
        }
        if (x !== board.length - 1) {
          if (board[x + 1][y - 1] === 0) {
            board[x + 1].splice(y - 1, 1, 2);
          }
          if (board[x + 1][y] === 0) {
            board[x + 1].splice(y, 1, 2);
          }
          if (board[x + 1][y + 1] === 0) {
            board[x + 1].splice(y + 1, 1, 2);
          }
        }
      }
    });
  });
    
  board.forEach((v) => {
    v.forEach((sv) => {
      if (sv === 0) {
        result += 1;
      }
    });
  });

  return result;
}