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

var j = new TreeNode('j9');
var h = new TreeNode('h8',null,j);
var g = new TreeNode('g7',null,h);
var f = new TreeNode('f6',null,g);
var e = new TreeNode('e5',c,f); //根
var d = new TreeNode('d4');
var c = new TreeNode('c3',b, d);
var b = new TreeNode('b2',a);
var a = new TreeNode('a1');


function getDeep(root) {
    if (root === null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

// 判断 是否为 平衡二叉树
function isBanance(root) {
    if (root === null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) return false;
    else return isBanance(root.left) && isBanance(root.right);
}

console.log(getDeep(a));
console.log(isBanance(a));

// 不平衡二叉树 转换 为 平衡二叉树
// 左单旋：左边浅，右边深时
    // 旋转节点：当前不平衡的节点
    // 新根： 右子树的根节点
    // 变化分支： 旋转节点的右子树的左子树
    // 不变分支： 旋转节点的右子树的右子树
// 左单旋：右边浅，左边深时
    // 旋转节点：当前不平衡的节点
    // 新根： 左子树的根节点
    // 变化分支： 旋转节点的左子树的右子树
    // 不变分支： 旋转节点的右子树的左子树


function leftRotate(root) {
    var newRoot = root.right;
    var changeTree = root.right.left;
    root.right = changeTree;
    newRoot.left = root;
    return newRoot;
}
function rightRotate(root) {
    var newRoot = root.left;
    var changeTree = root.left.right;
    root.left = changeTree;
    newRoot.right = root;
    return newRoot;
}

function change(root) {
    if(isBanance(root)) return root;
    if(root.left !== null) {
        root.left = change(root.left);
    }
    if(root.right !== null) {
        root.right = change(root.right);
    }
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) return true;
    else if (leftDeep > rightDeep) {
        return rightRotate(root)
    }
    else if (rightDeep > leftDeep) {
        return leftRotate(root);
    }
}

console.log(isBanance(e));
const newRoot = change(e);
console.log(isBanance(newRoot));