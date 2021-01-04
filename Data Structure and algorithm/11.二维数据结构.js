
// 二维数据结构
// 二维数组

// 二维拓扑结构
// 树

// 树   别名：有向无环图

// 根节点
// 叶子节点
// 节点
// 度       树节点的度数即为该节点孩子的个数, 树的度为度数中最大的
// 深度     树最多有几层


class TreeNode {
    constructor(value){
        this.value = value;
        this.child = [];
    }
}

class TreeNode {
    constructor(value){
        this.value = value;
        this.neighbor = [];
    }
}

var a = new TreeNode('a');
var b = new TreeNode('b');
var c = new TreeNode('c');
var d = new TreeNode('d');
var e = new TreeNode('e');
var f = new TreeNode('f');

a.neighbor.push(b);
a.neighbor.push(c);
a.neighbor.push(f);
b.neighbor.push(a);
b.neighbor.push(d);
b.neighbor.push(e);

console.log(a);
