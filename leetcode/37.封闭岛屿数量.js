// https://leetcode-cn.com/problems/number-of-closed-islands/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = function (grid) {
  let islandNum = 0;
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
  for (let i = 1; i < rowCount - 1; i++) {
    const row = grid[i];
    for (let j = 1; j < columnCount - 1; j++) {
      if (row[j] === 0) {
        islandNum++;
        dfs(grid, i, j);
      }
    }
  }
  return islandNum;
};

function dfs(grid, i, j) {
  const m = grid.length;
  const n = grid[0].length;

  if (i < 0 || j < 0 || i >= m || j >= n) return;
  if (grid[i][j] === 1) return;
  grid[i][j] = 1;
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
}

// console.log(
//   closedIsland([
//     [1, 1, 1, 1, 1, 1, 1, 0],
//     [1, 0, 0, 0, 0, 1, 1, 0],
//     [1, 0, 1, 0, 1, 1, 1, 0],
//     [1, 0, 0, 0, 0, 1, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1, 0],
//   ])
// );
// console.log(
//   closedIsland([
//     [0, 0, 1, 0, 0],
//     [0, 1, 0, 1, 0],
//     [0, 1, 1, 1, 0],
//   ])
// );

// console.log(
//   closedIsland([
//     [1, 1, 1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 0, 0, 1],
//     [1, 0, 1, 1, 1, 0, 1],
//     [1, 0, 1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1, 0, 1],
//     [1, 0, 0, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1],
//   ])
// );

console.log(
  closedIsland([
    [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  ])
);