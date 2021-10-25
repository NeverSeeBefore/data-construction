// https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/comments/

const { createTree } = require("./utils");

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
var maxPathSum = function (root) {
  let maxSum = -Infinity;
  function _maxPathSum(root) {
    if (!root) {
      return -Infinity;
    }
    const maxLeft = _maxPathSum(root.left);
    const maxRight = _maxPathSum(root.right);
    maxSum = Math.max(maxSum, maxLeft + maxRight + root.val, maxLeft, maxRight);
    return Math.max(root.val + maxLeft, root.val + maxRight, root.val);
  }
  const _maxPathSumResult = _maxPathSum(root);
  return Math.max(_maxPathSumResult, maxSum);
};

const tree = createTree([-3]);
console.log(tree);
console.log(maxPathSum(tree));
