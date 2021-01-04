

// 优点 无论给出哪个节点，都能对整个链表便利
// 缺点 多耗费一个引用空间，构建比较复杂
class LinkNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

var node1 = new LinkNode(1);
var node2 = new LinkNode(2);
var node3 = new LinkNode(3);
var node4 = new LinkNode(4);
var node5 = new LinkNode(5);

node1.next = node2;

node2.next = node3;
node2.prev = node1;

node3.next = node4;
node3.prev = node2;

node4.next = node5;
node4.prev = node3;

node5.prev = node4;
console.log(node1)