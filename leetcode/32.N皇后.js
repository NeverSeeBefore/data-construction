// https://leetcode-cn.com/problems/n-queens/

// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
  const result = []; // 最终结果
  const board = []; // 棋盘
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill("."));
  }

  /**
   * 检测对应位置是否可放置皇后
   * @param {string[]} board 棋盘
   * @param {number} row 第几行
   * @param {number} column 第几列
   * @param {number} n 棋盘大小
   * @returns {boolean}
   */
  const isValid = function (board, row, column, n) {
    // 皇后的可攻击的方向，有八个
    // 但是，由于我们从上往下放置皇后
    // 且 每行只有一个皇后
    // 所以，只需要检测三个方向是否有皇后即可

    // 上
    for (let i = 0; i < row; i++) {
      if (board[i][column] === "Q") {
        return false;
      }
    }

    // 左上
    for (let i = row - 1, j = column - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") {
        return false;
      }
    }

    // 右上
    for (let i = row - 1, j = column + 1; i >= 0 && j <= n; i--, j++) {
      if (board[i][j] === "Q") {
        return false;
      }
    }
    return true;
  };
  // console.log(isValid(
  //   [
  //     ["Q", "."],
  //     [".", "."]
  //   ],
  //   0,
  //   0,
  //   2)
  // );
  /**
   * 为第row行放置皇后
   * @param {number} row 第几行
   * @param {number} n 棋盘大小
   * @returns {undefined}
   */
  const travel = function (row, n) {
    if (row === n) {
      const oneWay = board.slice().map((item) => item.join(""));
      result.push(oneWay);
      return;
    }
    for (let column = 0; column < n; column++) {
      if (!isValid(board, row, column, n)) {
        continue;
      }
      board[row][column] = "Q";
      travel(row + 1, n);
      board[row][column] = ".";
    }
  };
  travel(0, n);

  return result;
};

console.log(solveNQueens(1));
console.log(solveNQueens(2));
console.log(solveNQueens(3));
console.log(solveNQueens(4));
console.log(solveNQueens(5));
