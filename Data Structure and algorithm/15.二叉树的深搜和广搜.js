
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

function deepFirst(root, target) {

}

