
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
var c2 = new TreeNode('c');
var d2 = new TreeNode('d');
var e2 = new TreeNode('e');
var f2 = new TreeNode('f');
var g2 = new TreeNode('g');

a2.left = c2;
a2.right = b2;
b2.left = d2;
b2.right = e2;
c2.left = f2;
c2.right = g2;


function isEqual(root1, root2) {
    if (root1 === root2) return true;
    if ((root1 === null && root2 !== null) || (root1 !== null && root2 === null)) return false;
    if (root1.value !== root2.value) return false;
    return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
}
console.log(isEqual(a, a2));



