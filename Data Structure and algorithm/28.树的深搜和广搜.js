// 树的深搜和广搜

function TreeNode(value){
    this.value = value;
    this.childs = [];
}
//              a
//      ________|________
//      |       |       |
//      c       b       f
//           ___|___
//           |     |
//           d     e

var a = new TreeNode('a');
var b = new TreeNode('b');
var c = new TreeNode('c');
var d = new TreeNode('d');
var e = new TreeNode('e');
var f = new TreeNode('f');
a.childs.push(c);
a.childs.push(b);
a.childs.push(f);
b.childs.push(d);
b.childs.push(e);

function deepSearch(root, target) {
    if(root === null) return false;
    console.log(root.value);
    if(root.value === target) return true;
    var result = false;
    var i = 0;
    while(i < root.childs.length && !result){
        result |= deepSearch(root.childs[i], target);
        i++;
    }

    return !!result;
}

console.log(
    'deep first',
    deepSearch(a, 'd')
)

function branchSearch(roots, target) {
    if(roots === null || roots.length === 0) return false;
    var childsList = [];
    for(var i = 0; i < roots.length; i ++){
        console.log(roots[i].value);
        if (roots[i].value === target) {
            return true;
        } else {
            childsList = childsList.concat(roots[i].childs);
        }
    }
    return branchSearch(childsList, target);
}

console.log(
    'branch first',
    branchSearch([a], 'd')
)