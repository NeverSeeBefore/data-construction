
/**
 *  回溯法框架
 * @param {number[]} int
 * @param {number[]} track
 */
function backtrack(nums, track) {
    for (var i = 0; i < nums.length; i++) {
        track.push(nums[i]);
        backtrack(nums, track);
        track.pop();
    }
}


/**
 * BFS框架
 * @param {Node} istartnt
 * @param {Node} int
 */
// 计算从起点 start 到终点 target 的最近距离
function BFS(start, target) {
    var q = []; // 核心数据结构
    var visited = new Set(); // 避免走回头路
    
    q.unshift(start); // 将起点加入队列
    visited.add(start);
    var step = 0; // 记录扩散的步数

    while (q.length) {
        var sz = q.length;
        /* 将当前队列中的所有节点向四周扩散 */
        for (var i = 0; i < sz; i++) {
            var cur = q.pop();
            /* 划重点：这里判断是否到达终点 */
            if (cur === target)
                return step;
            /* 将 cur 的相邻节点加入队列 */
            for (x in cur)
                if (!visited.has(x)) {
                    q.unshift(x);
                    visited.add(x);
                }
        }
        /* 划重点：更新步数在这里 */
        step++;
    }
}

/**
 * 二维矩阵遍历框架
 */
function dfs(grid, i, j, visited) {
    var m = grid.length;
    var n = grid[0].length;
    if (i < 0 || j < 0 || i >= m || j >= n) {
        return;
    }
    if (visited[i][j]) {
        return
    }
    visited[i][j] = true;
    dfs(grid, i - 1, j, visited);
    dfs(grid, i + 1, j, visited);
    dfs(grid, i, j - 1, visited);
    dfs(grid, i, j + 1, visited);
}