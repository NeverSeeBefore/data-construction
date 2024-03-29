// https://leetcode-cn.com/problems/linked-list-cycle/

// 给定一个链表，判断链表中是否有环。

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

// 如果链表中存在环，则返回 true 。 否则，返回 false 。

// 输入：head = [3,2,0,-4], pos = 1
// 输出：true
// 解释：链表中有一个环，其尾部连接到第二个节点。

// 输入：head = [1,2], pos = 0
// 输出：true
// 解释：链表中有一个环，其尾部连接到第一个节点。

// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。

// 输入：head = [1], pos = -1
// 输出：false
// 解释：链表中没有环。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  var slow = head;
  var fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
        return true;
    }
  }
  return false;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}


var detectCycle = function(head) {
    var slow = head;
    var fast = head;
    var hasCycle = false;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) {
        return null;
    }
    slow = head;
    while(slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
// a → b → c
// a ← ← ← |
a.next = b;
b.next = c;
c.next = d;
d.next = a;
console.log(getCycleEntry(a));
// fast a   c   b   a
// slow a   b   c   a