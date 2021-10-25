// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/comments/

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 *
 * @param {number[]} preorder 谦虚遍历数组
 * @param {number[]} inorder 中序遍历数组
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  /**
   *
   * @param {number} preorderStart 前序遍历起始位置
   * @param {number} preorderEnd 前序遍历结束位置
   * @param {number} inorderStart 中序遍历起始位置
   * @param {number} inorderEnd 中序遍历结束位置
   * @returns
   */
  function _buildTree(preorderStart, preorderEnd, inorderStart, inorderEnd) {
    // 只有一个节点时 为出口
    if (inorderStart - inorderEnd === 0) {
      return new TreeNode(preorder[preorderStart]);
    }

    var rootVal = preorder[preorderStart];
    // 根节点
    var root = new TreeNode(rootVal);
    // 根节点在中序遍历的位置
    var rootIndex = inorder.indexOf(rootVal);
    // 左子树的节点个数 根节点在中序遍历的位置 - 中序start
    var leftCount = rootIndex - inorderStart;

    // 前序遍历 左子树的范围， preorderStart + 1 ->  preorderStart + (左子树的节点个数)
    var preorderLeftStart = preorderStart + 1;
    var preorderLeftEnd = preorderStart + leftCount;

    // 中序遍历 左子树的范围， 中序start -> 根节点在左子树的位置 - 1
    var inorderLeftStart = inorderStart;
    var inorderLeftEnd = rootIndex - 1;

    // 前序遍历 右子树的范围， preorderStart + 1 + (左子树的节点个数) +  1  -> preorderLeftEnd
    // 或者  preorderLeftEnd - (右子树的个数)  -> preorderLeftEnd
    // 或者 前序遍历左子树结束位置 + 1 -> 前序遍历结束位置
    // 右子树的节点个数 中序end - 根节点在中序遍历的位置
    var preorderRightStart = preorderLeftEnd + 1;
    var preorderRightEnd = preorderEnd;

    // 中序遍历 右子树的范围 rootIndex + 1 -> 中序遍历的结束位置
    var inorderRightStart = rootIndex + 1;
    var inorderRightEnd = inorderEnd;
    console.log(
      "|",
      preorderLeftStart,
      preorderLeftEnd,
      inorderLeftStart,
      inorderLeftEnd,
      "|",
      preorderLeftStart,
      preorderRightEnd,
      inorderRightStart,
      inorderRightEnd,
      "|"
    );
    inorderLeftStart <= inorderLeftEnd &&
      (root.left = _buildTree(
        preorderLeftStart,
        preorderLeftEnd,
        inorderLeftStart,
        inorderLeftEnd
      ));
    inorderRightStart <= inorderRightEnd &&
      (root.right = _buildTree(
        preorderRightStart,
        preorderRightEnd,
        inorderRightStart,
        inorderRightEnd
      ));

    return root;
  }

  return _buildTree(0, preorder.length - 1, 0, inorder.length - 1);
};

// console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([1, 2], [2, 1]));

// 3, 9, 20, 15, 7
// 9, 3, 15, 20, 7
