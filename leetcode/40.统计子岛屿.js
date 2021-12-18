// https://leetcode-cn.com/problems/count-sub-islands/

// 第一种写法，通过dfs的过程中 判断岛屿是否是子岛屿
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
const countSubIslands = function (grid1, grid2) {
  let subIslandNum = 0;
  const m = grid1.length;
  const n = grid1[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1) {
        if (dfs(grid1, grid2, i, j)) subIslandNum++;
      }
    }
  }

  return subIslandNum;
};

function dfs(grid, grid2, i, j) {
  const m = grid.length;
  const n = grid[0].length;
  // 如果过了边界，返回true，以其他方向的结果为准
  if (i < 0 || j < 0 || i >= m || j >= n) return true;
  /**
   * 1 1 true 暂时是
   * 1 0 true 暂时是
   * 0 1 false 绝对不是
   * 0 0 true 暂时是
   */
  // 当前节点为0，可能是grid2岛屿的边界，返回true，以其他方向的结果为准
  if (grid2[i][j] === 0) return true;

  // 此时 grid2[i][j] === 1
  // 如果 grid[i][j] === 0,绝对不是 子岛屿
  // 如果 grid[i][j] === 1,暂时是 子岛屿
  const isSub = grid[i][j] === 1;
  grid2[i][j] = 0;
  // 继续探索 知道边界

  // 这里 不能直接 连续 dfs && dfs && ...
  // 因为 js的执行逻辑，左侧失败，右侧就直接不执行了
  const top = dfs(grid, grid2, i - 1, j);
  const bottom = dfs(grid, grid2, i + 1, j);
  const left = dfs(grid, grid2, i, j - 1);
  const right = dfs(grid, grid2, i, j + 1);
  return top && bottom && left && right && isSub;
}

// 第二种写法，现将不是子岛屿的岛屿淹没，剩余的岛屿就都是子岛屿了
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
// const countSubIslands = function (grid1, grid2) {
//   let subIslandNum = 0;
//   const m = grid1.length;
//   const n = grid1[0].length;

//   // 第一次循环 淹没非子岛屿的岛屿
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid1[i][j] === 0 && grid2[i][j] === 1) {
//         dfs(grid2, i, j);
//       }
//     }
//   }
//   // 第二次循环 计算剩余岛屿数
//   // 理论上来说，两次循环不可以合并
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid2[i][j] === 1) {
//         dfs(grid2, i, j);
//         subIslandNum++;
//       }
//     }
//   }

//   return subIslandNum;
// };

// function dfs(grid, i, j) {
//   const m = grid.length;
//   const n = grid[0].length;

//   if (i < 0 || j < 0 || i >= m || j >= n) return;
//   if (grid[i][j] === 0) return;
//   grid[i][j] = 0;
//   dfs(grid, i - 1, j);
//   dfs(grid, i + 1, j);
//   dfs(grid, i, j - 1);
//   dfs(grid, i, j + 1);
// }

console.log(
  countSubIslands(
    [
      [1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 1, 1],
    ],
    [
      [1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ]
  )
);

console.log(
  countSubIslands(
    [
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
    ],
    [
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ]
  )
);
