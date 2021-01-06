
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
    if (root === null) return false;
    console.log(root.value);
    if (root.value === target) return true;
    return deepFirst(root.left, target) || deepFirst(root.right, target);
}
console.log(
    deepFirst(a, 'e'),
    deepFirst(a, 'h'),
)

function breadthFirst(roots, target) {
    if (roots === null) return false;
    if (!Array.isArray(roots)) {
        roots = [roots];
    } else if(roots.length === 0) {
        return false;
    }
    var childs = []
    for (var i = 0; i < roots.length; i++) {
        console.log(roots[i] && roots[i].value);
        if (roots[i] !== null) {
            if (roots[i].value === target) return true;
            roots[i].left && childs.push(roots[i].left);
            roots[i].right && childs.push(roots[i].right);
        }
    }
    return breadthFirst(childs, target);
}
console.log(
    breadthFirst(a, 'e'),
    breadthFirst(a, 'h'),
)