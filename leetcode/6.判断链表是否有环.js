
function ListNode(x) {
    this.value = x;
    this.next = null;
}


/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
function hasCycle(head) {
    // write code here
    var slow = head;
    var fast = head;
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
}
module.exports = {
    hasCycle: hasCycle
};




const a = new ListNode('a');
const b = new ListNode('b');
const c = new ListNode('c');
const d = new ListNode('d');
const e = new ListNode('e');
const f = new ListNode('f');
const g = new ListNode('g');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = c;


console.log(hasCycle(a));
g.next = null;
console.log(hasCycle(a));
