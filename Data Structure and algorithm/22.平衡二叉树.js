// 二叉搜索树  性能优化明显
// 但是追求极致，需要 「二叉搜索树」 转换为 「二叉平衡搜索树」(平衡二叉树)

// 平衡二叉树
// 1. 根节点的左子树 与右子树 的高度差不超过一
// 2. 每个字数都符合第一条

//             a
//          /     \
//       /           \
//     b               c
//   /   \           /   \
// d       e       f       g
//   \      \
//    h       j


function TreeNode(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
}

// 判断 是否为 平衡二叉树

var j = new TreeNode('j');
var h = new TreeNode('h');
var g = new TreeNode('g');
var f = new TreeNode('f');
var e = new TreeNode('e', null, j);
var d = new TreeNode('d', null, h);
var c = new TreeNode('c', f, g);
var b = new TreeNode('b', d, e);
var a = new TreeNode('a', b, c);

function getDeep(root) {
    if (root === null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

function isBanance(root) {
    if (root === null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) return false;
    else return isBanance(root.left) && isBanance(root.right);
}

console.log(getDeep(a));
console.log(isBanance(a));