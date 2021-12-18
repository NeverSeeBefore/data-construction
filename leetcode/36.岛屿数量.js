// https://leetcode-cn.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let islandNum = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === "1") {
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
  if (grid[i][j] === "0") return;
  grid[i][j] = "0";
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);