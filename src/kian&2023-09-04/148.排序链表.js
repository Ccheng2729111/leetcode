/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var sortList = function (head) {
//   let list = [];
//   let p = head;

//   while (p) {
//     list.push(p.val);
//     p = p.next;
//   }

//   list = list.sort((a, b) => a - b);

//   let p1 = (dummy = new ListNode(-1));
//   for (let i = 0; i < list.length; i++) {
//     p1.next = new ListNode(list[i]);
//     p1 = p1.next;
//   }

//   return dummy.next;
// };

// var sortList = function (head) {
//   let p1 = head;

//   while (p1 && p1.next) {
//     let p2 = p1.next;

//     while (p2) {
//       if (p1.val > p2.val) {
//         let mix = p1.val;
//         p1.val = p2.val;
//         p2.val = mix;
//       }
//       p2 = p2.next;
//     }
//     p1 = p1.next;
//   }

//   return head
// };

var sortList = function (head) {
  if (!head || !head.next) return head;
  let fast = head;
  let slow = head;
  let preSlow = null;

  while (fast && fast.next) {
    preSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // 断开head的mid的next
  preSlow.next = null;

  let l = sortList(head);
  let r = sortList(slow);

  return merge(l, r);
};

function merge(left, right) {
  let p = (dummy = new ListNode(-1));

  while (left && right) {
    if (left.val > right.val) {
      p.next = right;
      right = right.next;
    } else {
      p.next = left;
      left = left.next;
    }
    p = p.next;
  }

  if (left) p.next = left;
  if (right) p.next = right;

  return dummy.next;
}
// @lc code=end
