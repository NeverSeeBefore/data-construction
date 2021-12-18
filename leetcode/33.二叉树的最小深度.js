// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

const { createTree } = require("./utils");

// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  const branchArr = [root];
  let depth = 1;
  while (branchArr.length) {
    const size = branchArr.length;
    for (let i = 0; i < size; i++) {
      const curr = branchArr.shift();
      if (curr.left === null && curr.right === null) {
        return depth;
      }
      (curr.left !== null) && branchArr.push(curr.left);
      (curr.right !== null) && branchArr.push(curr.right);
    }
    depth++;
  }

  return depth;
};

const root = createTree([3, 9, 20, "#", "#", 15, 7]);
console.log(root);
console.log(minDepth(root));

