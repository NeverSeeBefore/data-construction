// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

const { createLink } = require("./utils");

const getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    if (!p1) {
      p1 = headB;
    } else {
      p1 = p1.next;
    }
    if (!p2) {
      p2 = headA;
    } else {
      p2 = p2.next;
    }
    console.log('-----', p1, p2)
  }
  return p1;
};

const commonLink = createLink(["c1", "c2", "c3"]);

const link1 = createLink(["a1", "a2"]);
const link2 = createLink(["b1", "b2", "b3"]);
link1.next = commonLink;
link2.next = commonLink;

console.log(getIntersectionNode(link1, link2));