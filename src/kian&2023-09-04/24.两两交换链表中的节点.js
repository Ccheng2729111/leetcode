/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

/**
 * 链表节点
 * @param {*} val
 * @param {ListNode} next
 */
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
/**
 * 将一个数组转为链表
 * @param {array} a
 * @return {ListNode}
 */
const getListFromArray = (a) => {
  let dummy = new ListNode();
  let pre = dummy;
  a.forEach((x) => (pre = pre.next = new ListNode(x)));
  return dummy.next;
};
/**
 * 将一个链表转为数组
 * @param {ListNode} node
 * @return {array}
 */
const getArrayFromList = (node) => {
  let a = [];
  while (node) {
    a.push(node.val);
    node = node.next;
  }
  return a;
};
/**
 * 打印一个链表
 * @param {ListNode} node
 */
const logList = (node) => {
  let str = 'list: ';
  while (node) {
    str += node.val + '->';
    node = node.next;
  }
  str += 'end';
  log(str);
};
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
// var swapPairs = function (head) {
//   // if (!head.next) {
//   //   return head;
//   // }

//   let dummy = getListFromArray(head);

//   let p1 = dummy;
//   let p2 = dummy.next;

//   while (p2 && p2.next) {
//     let next = p2.next;
//     p1.next = null
//     p2.next = p1;
//     p1.next = next;

//     //----------------

//     p1 = p1.next;
//     p2 = p2.next;
//   }

//   return dummy;
// };

// var swapPairs = function (head) {
//   if (head === null || head.next === null) return head;
//   let firstHead = head;
//   let secondHead = head.next;

//   // 第一个节点需要指向替换后的第二个节点
//   firstHead.next = swapPairs(secondHead.next);
//   // 第二个节点需要指向第一个节点
//   secondHead.next = firstHead;

//   //相当于是互相替换

//   // 返回后一个节点 用于提供上一次递归的第一个节点的下一个节点
//   return secondHead
// };

var swapPairs = function (head) {
  // 哨兵模式 node0是虚拟节点 
  let node0 = dummy = new ListNode(-1, head);
  // node1是真实的head
  let node1 = node0.next;

  // 如果node1&&node1.next有值的话 需要遍历
  while (node1 && node1.next) {
    // node2 = node1的next
    let node2 = node1.next;
    // node3 = node1.next.next
    let node3 = node2.next;

    // 0->2
    node0.next = node2;
    // 2->1
    node2.next = node1;
    // 1->3
    node1.next = node3;

    // node0换成node1 node1现在是靠后一位的
    node0 = node1;
    node1 = node3;
  }

  return dummy.next
};
// swapPairs([1, 2, 3, 4]);
// swapPairs([]);
// swapPairs([1]);
// @lc code=end
