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

// function reverse(root) {
//     if (!root || root.next === null) return root;
//     // 倒数第二个，调整一下顺序，然后返回倒数第二个，就是根节点
//     if (root.next.next === null) {
//         const newRoot = root.next;
//         newRoot.next = root;
//         root.next = null;
//         return newRoot;
//     }
//     // 拿到根节点
//     const result = reverse(root.next);
//     root.next.next = root;
//     root.next = null;
//     return result;
// }

function reverse(root) {
    // 最后一个节点
    if (!root || root.next === null) return root;
    // reverse 总会返回新的头节点
    const newRoot = reverse(root.next);
    // root 与 root.next 交换位置
    root.next.next = root;
    root.next = null;
    return newRoot;
}

const a2 = reverse(a);

each(a2);
console.dir(a);
// a b c d reverse(e)
// reverse(e) 因为只有一个节点，所以直接返回 e, 此时 d.next 是 e， e.next 是 null，交换de，e.next 是 d，d.next 是 null
// a b c reverse(d)
// reverse(d) 得到的仍然e，此时新链： e -> d -> null, 主链：a -> b -> c -> d -> null，交换cd，c.next.next = c, c.next = null,此时主链：a -> b -> c -> null，新链：e -> d -> c -> null
// a b reverse(c)
