function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}


/**
  * 树的层序遍历
  * @param root TreeNode类
  * @return int整型二维数组
  */
function levelOrder(root) {
    if (root instanceof TreeNode) {
        root = [root];
    }
    if (root.length <= 0) return[];

    var trees = [];
    var curLevel = [];
    for (var i = 0; i < root.length; i++) {
        curLevel.push(root[i].val);
        root[i].left && trees.push(root[i].left);
        root[i].right && trees.push(root[i].right);
    }
    return [curLevel, ...levelOrder(trees)];
}
module.exports = {
    levelOrder: levelOrder
};

var node1 = new TreeNode(3);
var node2 = new TreeNode(9);
var node3 = new TreeNode(20);
var node4 = new TreeNode(15);
var node5 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

// var node1 = new TreeNode(1);
// var node2 = new TreeNode(2);
// var node3 = new TreeNode(3);
// var node4 = new TreeNode(4);
// var node5 = new TreeNode(5);

// node1.left = node2;
// node1.right = node3;
// node2.left = node4;
// node3.right = node5;

console.log(
    levelOrder(node1)
);