
// 还原二叉树 需要中序 + 前序  或者 中序 + 后续

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

function inOrderTravel(root) {
    if (root == null) return;
    inOrderTravel(root.left);
    console.log(root.value);
    inOrderTravel(root.right);
}

function postOrderTravel(root) {
    if (root == null) return;
    postOrderTravel(root.left);
    postOrderTravel(root.right);
    console.log(root.value);
}

const preOrderResult = ['a', 'c', 'f', 'g', 'b', 'd', 'e'];
const inOrderResult = ['f', 'c', 'g', 'a', 'd', 'b', 'e'];
const postOrderResult = ['f', 'g', 'c', 'd', 'e', 'b', 'a'];

function resetByPrevAndInOrder(preOrder, inOrder) {
    if (preOrder === null || inOrder === null || preOrder.length === 0 || preOrder.length !== inOrder.length) return;
    var root = new TreeNode(preOrder[0]);
    const index = inOrder.indexOf(root.value);
    const preOrderLeft = preOrder.slice(1, index + 1);
    const preOrderRight = preOrder.slice(index + 1, inOrder.length);
    const inOrderLeft = inOrder.slice(0, index);
    const inOrderRight = inOrder.slice(index + 1, inOrder.length);
    root.left = resetByPrevAndInOrder(preOrderLeft, inOrderLeft);
    root.right = resetByPrevAndInOrder(preOrderRight, inOrderRight);
    return root;
}

postOrderTravel(resetByPrevAndInOrder(preOrderResult, inOrderResult));


function resetByPostAndInOrder(postOrder, inOrder) {
    if (postOrder === null || inOrder === null || postOrder.length === 0 || postOrder.length !== inOrder.length) return;
    // 创建一个根节点
    var root = new TreeNode(postOrder[postOrder.length - 1]);
    // 拿到根节点在中序结果的索引
    const index = inOrder.indexOf(root.value);
    // 根据节点，拿到后序遍历结果和中序遍历结果的 左子树 和 右子树
    const postOrderLeft = postOrder.slice(0, index);
    const postOrderRight = postOrder.slice(index, inOrder.length - 1);
    const inOrderLeft = inOrder.slice(0, index);
    const inOrderRight = inOrder.slice(index + 1, inOrder.length);
    root.left = resetByPostAndInOrder(postOrderLeft, inOrderLeft);
    root.right = resetByPostAndInOrder(postOrderRight, inOrderRight);
    return root;
}
preOrderTravel(resetByPostAndInOrder(postOrderResult, inOrderResult));