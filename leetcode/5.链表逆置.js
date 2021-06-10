function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead) {
    // write code here
    if(pHead.next === null) {
        return pHead;
    }
    if (pHead.next.next === null) {
        pHead.next.next = pHead;
        return pHead.next;
    }
    var newRoot = ReverseList(pHead.next);
    pHead.next.next = pHead;
    pHead.next = null;
    return newRoot;
}
// module.exports = {
//     ReverseList : ReverseList
// };



const a = new ListNode('a');
const b = new ListNode('b');
const c = new ListNode('c');
const d = new ListNode('d');
const e = new ListNode('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function each (root) {
    if (root) {
        console.log(root.val);
        each(root.next);
    }
}

each(a);
const a2 = ReverseList(a);

each(a2);
