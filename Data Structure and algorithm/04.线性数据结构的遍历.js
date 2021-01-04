class LinkNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

let a = new LinkNode(1);
let b = new LinkNode(2);
let c = new LinkNode(3);
let d = new LinkNode(4);
let e = new LinkNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// 链表遍历
function travel(root) {
    var temp = root;
    while (true) {
        if (temp === null) {
            return;
        }
        console.log(temp.value);
        temp = temp.next;
    }
}
travel(a);

// 递归遍历
function travelRecursive(root) {
    if (root === null) {
        return;
    }
    console.log(root.value);
    return travelRecursive(root.next);
}
travelRecursive(a);