
// 深度优先搜索和广度优先搜索

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

var a2 = new TreeNode('a');
var b2 = new TreeNode('b');
var c2 = new TreeNode('c2');
var d2 = new TreeNode('d');
var e2 = new TreeNode('e');
var f2 = new TreeNode('f2');
var g2 = new TreeNode('g');

a2.left = c2;
a2.right = b2;
b2.left = d2;
b2.right = e2;
c2.left = f2;
c2.right = null;


function diffTree(root1, root2, diffList) {
    if (root1 === root2 === null) return diffList;
    if (root1 === root2) return diffList;
    if (root1 === null && root2 !== null) {
        diffList.push({
            type: '新增',
            origin: null,
            now: root2
        })
    } else if (root1 !== null && root2 === null) {
        diffList.push({
            type: '删除',
            origin: root1,
            now: null
        })
    } else if (root1.value !== root2.value) {
        diffList.push({
            type: '修改',
            origin: root1,
            now: root2
        })
        diffTree(root1.left, root2.left, diffList);
        diffTree(root1.right, root2.right, diffList);
    } else {
        diffTree(root1.left, root2.left, diffList);
        diffTree(root1.right, root2.right, diffList);
    }

    return diffList;
}
const diffList = [];
console.log(diffTree(a, a2, diffList));



