// https://leetcode-cn.com/problems/number-of-distinct-islands/

// 题目：计算不同形状岛屿的数量
// 解法：
// 相同形状的岛屿，进行相同的dfs操作时，向上下左右移动及撤销的顺序时的步骤是一样的，将这一顺序记录下来，成为对岛屿的序列化
// 每次淹没岛屿时，记录岛屿的序列化结果，最后不同结果的数量即为不同形状的岛屿数量
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
const numberOfDistinctIslands = function (grid) {
  let islandSet = new Set();
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const sequence = dfs(grid, i, j, "#");
        islandSet.add(sequence);
      }
    }
  }
  return islandSet.size;
};

function dfs(grid, i, j, direction) {
  const m = grid.length;
  const n = grid[0].length;
  let sequence = '';
  if (i < 0 || j < 0 || i >= m || j >= n) return "";
  if (grid[i][j] === 0) return "";
  grid[i][j] = 0;
  sequence =
    direction +
    "," +
    dfs(grid, i - 1, j, "上") +
    dfs(grid, i + 1, j, "下") +
    dfs(grid, i, j - 1, "左") +
    dfs(grid, i, j + 1, "右") +
    "撤销" +
    direction +
    ",";
  return sequence;
}

console.log(
  numberOfDistinctIslands([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ])
);

console.log(
  numberOfDistinctIslands([
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
  ])
);