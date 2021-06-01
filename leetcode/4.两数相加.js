
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 示例
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/add-two-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。




// Definition for singly - linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var res = new ListNode(0);
    var cur = res;
    var carry = false;
    while(l1 || l2) {
        cur.next = new ListNode(0);
        cur = cur.next;
        var x = l1 === null ? 0 : l1.val;
        var y = l2 === null ? 0 : l2.val;
        var sum = x + y;
        if (carry) {
            sum ++;
        }
        if (sum >= 10) {
            cur.val = sum - 10;
            carry = true;
        }
        else {
            cur.val = sum;
            carry = false;
        }
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
    }
    if (carry) {
        cur.next = new ListNode(1);
    }
    return res.next;
};

// 342
var a = new ListNode(2);
var b = new ListNode(4);
var c = new ListNode(3);
a.next = b;
b.next =c;

// 465
var d = new ListNode(5);
var e = new ListNode(6);
var f = new ListNode(4);
d.next = e;
e.next = f;
// 807
console.log(
    eachList(addTwoNumbers(a, d))
);

function eachList (l) {
    if (l) {
        console.log(l.val);
        eachList(l.next);
    }
}