// https://leetcode-cn.com/problems/recover-binary-search-tree/

const { createTree } = require("./utils");

const recoverTree = function(root) {
  let t1 = t2 = pre = null;
  const _inorder = function(root) {
    if (root === null) {
      return
    }
    _inorder(root.left);
    if (pre && pre.val > root.val) {
      if (!t1) {
        t1 = pre;
      }
      t2 = root;
    }
    pre = root;
    _inorder(root.right);
  }
  _inorder(root, t1, t2, pre);
  const temp = t1.val;
  t1.val = t2.val;
  t2.val = temp;
  return;
};


const root = createTree([1, 3, '#', '#', 2]);
// console.log(root);
recoverTree(root);
// console.log(root);

const root2 = createTree([3, 1, 4, '#', '#', 2]);
// console.log(root2);
recoverTree(root2);
// console.log(root2);


