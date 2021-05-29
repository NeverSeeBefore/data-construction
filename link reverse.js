class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function each (root) {
    if (root) {
        console.log(root.value);
        each(root.next);
    }
}

each(a);

function reverse(root) {
    if (!root || root.next === null) return root;
    // 倒数第二个，调整一下顺序，然后返回倒数第二个，就是根节点
    if (root.next.next === null) {
        const newRoot = root.next;
        newRoot.next = root;
        root.next = null;
        return newRoot;
    }
    // 拿到根节点
    const result = reverse(root.next);
    root.next.next = root;
    root.next = null;
    return result;
}

const a2 = reverse(a);

each(a2);
console.dir(a);
