
// 链表
// 空间上不连续
// 每增加一个节点都要多开销一个引用空间；
// 优点
// 不担心空间碎片；
// 缺点
// 查询速度慢
class LinkNode{
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
console.log(a.next.value);