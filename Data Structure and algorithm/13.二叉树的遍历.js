
// 还原二叉树 需要中序 + 前序  或者 中序 + 后续

class TreeNode {
    constructor(value){
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
    if(root == null) return;
    console.log(root.value);
    preOrderTravel(root.left);
    preOrderTravel(root.right);
}
console.log('前序遍历');
preOrderTravel(a);

function inOrderTravel(root) {
    if(root == null) return;
    inOrderTravel(root.left);
    console.log(root.value);
    inOrderTravel(root.right);
}
console.log('中序遍历');
inOrderTravel(a);

function postOrderTravel(root) {
    if(root == null) return;
    postOrderTravel(root.left);
    postOrderTravel(root.right);
    console.log(root.value);
}
console.log('后序遍历');
postOrderTravel(a);

// 非递归
// 前序
function preOrder(root) {
    if(root == null) return;
    const stack = [];
    stack.push(root)
    do{
        root = stack.pop();
        console.log(root.value);
        queue.push(root.right);
        queue.push(root.left);
    }while(queue.length > 0)
}