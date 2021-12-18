// https://leetcode-cn.com/problems/number-of-enclaves/

/**
 * @param {number[][]} grid
 * @return {number}
 */
// const numEnclaves = function (grid) {
//   let num = 0;
//   const rowCount = grid.length;
//   const columnCount = grid[0].length;
//   for (let i = 0; i < rowCount; i++) {
//     dfs(grid, i, 0);
//     dfs(grid, i, columnCount - 1);
//   }
//   for (let j = 0; j < columnCount; j++) {
//     dfs(grid, 0, j);
//     dfs(grid, rowCount - 1, j);
//   }
//   for (let i = 0; i < rowCount; i++) {
//     for (let j = 0; j < columnCount; j++) {
//       num += dfs(grid, i, j);
//     }
//   }
//   return num;
// };

// function dfs(grid, i, j) {
//   const m = grid.length;
//   const n = grid[0].length;
//   if (i < 0 || j < 0 || i >= m || j >= n) return 0;
//   if (grid[i][j] === 0) return 0;
//   grid[i][j] = 0;
//   return (
//     dfs(grid, i - 1, j) +
//     dfs(grid, i + 1, j) +
//     dfs(grid, i, j - 1) +
//     dfs(grid, i, j + 1) +
//     1
//   );
// }

/**
 * @param {number[][]} grid
 * @return {number}
 */
const numEnclaves = function (grid) {
  let num = 0;
  const rowCount = grid.length;
  const columnCount = grid[0].length;
  for (let i = 0; i < rowCount; i++) {
    dfs(grid, i, 0);
    dfs(grid, i, columnCount - 1);
  }
  for (let j = 0; j < columnCount; j++) {
    dfs(grid, 0, j);
    dfs(grid, rowCount - 1, j);
  }
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      if (grid[i][j] === 1) {
        num++;
      }
    }
  }
  return num;
};

function dfs(grid, i, j) {
  const m = grid.length;
  const n = grid[0].length;
  if (i < 0 || j < 0 || i >= m || j >= n) return 0;
  if (grid[i][j] === 0) return 0;
  grid[i][j] = 0;
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
}

console.log(
  numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
);

console.log(
  numEnclaves([
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
);
