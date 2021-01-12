// 红黑树是推到出来的
// 所以 直接学习红黑树 是比较 困难的
// 所以 按照 逻辑 逐渐推到，逐渐学习

// 问题 有一万个节点，写一个方法进行 查找，返回存在还是不存在
// 要求 尽可能的性能好

var TARGET = 8000;
// 创建一个 数据；
var arr = [];
for (var i = 0; i < 10000; i++) {
    arr[i] = Math.floor(Math.random() * 10000);
}

console.log('indexOf', arr.indexOf(TARGET));

var count = 0;
// 最基础的方法  遍历
function search(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

// console.log(arr);
console.log(
    'for',
    search(arr, TARGET),
    count
);

function TreeNode(value, left, right) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// 二叉搜索树（二叉排序树）
function addNode(root, num) {
    if (!root) return;
    if (root.value === num) return;
    if (num > root.value) {
        if (root.right == null) root.right = new TreeNode(num);
        else addNode(root.right, num);
    } else {
        if (root.left == null) root.left = new TreeNode(num);
        else addNode(root.left, num);
    }
}
function createSearchTree(arr) {
    if (!arr || arr.length === 0) return null;
    var root = new TreeNode(arr[0]);
    for (var i = 0; i < arr.length; i++) {
        addNode(root, arr[i]);
    }
    return root;
}

var searchTree = createSearchTree(arr);
// console.log(
//     searchTree
// )

// 查找树
count = 0
function searchByTree(root, target) {
    count++;
    if (root === null) return false;
    if (root.value === target) return true;
    if (root.value > target) return searchByTree(root.left, target);
    else return searchByTree(root.right, target);
}

console.log(
    'searchTree',
    searchByTree(searchTree, TARGET),
    count
)

// 二叉搜索树  性能优化明显
// 但是追求极致，需要 「二叉搜索树」 转换为 「二叉平衡搜索树」


