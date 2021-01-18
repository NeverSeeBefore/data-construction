// 图的深搜和广搜

function Node(value) {
    this.value = value;
    this.neighbor = [];
}
// -----------------------------
//         B
//       / | \
//    4/   |   \6
//   /     |     \
// A       |8      D
//   \7    |     /  \
//     \   |   /5     \7
//       \ | /          \
//         C             E
// -----------------------------

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');
var e = new Node('e');
a.neighbor.push(b, c);
b.neighbor.push(a, c, d);
c.neighbor.push(a, b, d);
d.neighbor.push(b, c, e);
e.neighbor.push(c, d);

function deepSearch(node, target, path) {
    if (node === null) return false;
    if (path.indexOf(node) !== -1) return false;
    console.log(node.value);
    if (node.value === target) return true;
    path.push(node);
    var result = false;
    var i = 0;
    while (i < node.neighbor.length && !result) {
        result |= deepSearch(node.neighbor[i], target, path);
        i++;
    }
    return !!result
}

console.log(
    'deep first',
    deepSearch(d, 'e', [])
)

function branchSearch(nodes, target, path) {
    if (nodes === null || nodes.length === 0) return false;
    var neighbors = [];
    for (var i = 0; i < nodes.length; i++) {
        if (path.indexOf(nodes[i]) !== -1) continue;
        console.log(nodes[i].value);
        path.push(nodes[i]);
        if (nodes[i].value === target) {
            return true;
        } else {
            neighbors = neighbors.concat(nodes[i].neighbor);
        }
    }
    return branchSearch(neighbors, target, path);
}

console.log(
    'branch first',
    branchSearch([d], 'a', [])
)