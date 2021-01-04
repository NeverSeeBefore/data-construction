
// 二叉树

// 根节点
// 子节点
// 父节点
// 叶子节点
// 普通节点
// 子树     每一个节点或者叶子节点，都认为自己是根节点
// 左子树、右子树


// 满二叉树
// 所有叶子节点都在最底层
// 每个非节点都有两的子节点

// 完全二叉树
// 国内定义
// 叶子结点都在最后一层，或者倒数第二层
// 叶子结点都靠左
// 国外定义
// 叶子结点都在最后一层，或者倒数第二层
// 如果有叶子结点，就必然有两个叶子节点

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//         a
//     c       b
// f      g d      e
var a = new TreeNode('a');
var b = new TreeNode('b');
var c = new TreeNode('c');
var d = new TreeNode('d');
var e = new TreeNode('e');
var f = new TreeNode('f');
var g = new TreeNode('g');

a.left = c;
a.right = b;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

// 二叉树遍历方法
// 层序遍历
// 前序遍历
// 中序遍历
// 后续遍历

function preOrderTravel(root) {
    if (root == null) return;
    console.log(root.value);
    preOrderTravel(root.left);
    preOrderTravel(root.right);
}
console.log('前序遍历');
preOrderTravel(a);

function inOrderTravel(root) {
    if (root == null) return;
    inOrderTravel(root.left);
    console.log(root.value);
    inOrderTravel(root.right);
}
// console.log('中序遍历');
// inOrderTravel(a);

function postOrderTravel(root) {
    if (root == null) return;
    postOrderTravel(root.left);
    postOrderTravel(root.right);
    console.log(root.value);
}
// console.log('后序遍历');
// postOrderTravel(a);

// 非递归
// 前序
function preOrder(root) {
    var node = root;
    var stack = [];
    while (node !== null || stack.length !== 0) {
        while(node !== null) {
            console.log(node.value);
            stack.push(node);
            node = node.left;
        }
        if(stack.length !== 0) {
            node = stack.pop();
            node = node.right;
        }
    }
}

console.log('前序非递归遍历');
preOrder(a);