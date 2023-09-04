/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let addOne = 0;
  let dummy = new ListNode(-1);
  let head = dummy;

  // 这里需要判断l1 l2 addOne是否有值 如果有的话需要继续递归
  while (l1 || l2 || addOne) {
    // 如果l1已经没有了 补充0
    let val1 = l1 !== null ? l1.val : 0;
    // 如果l2已经没有了 补充0
    let val2 = l2 !== null ? l2.val : 0;

    // 这里需要注意addOne 因为要进位所以 需要加上
    let sum = val1 + val2 + addOne;

    // 这里取余数放进位置里
    head.next = new ListNode(sum % 10);
    head = head.next;

    // 判断加起来的数量是否大于等于10 如果是的话需要addOne
    addOne = sum >= 10 ? 1 : 0;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  return dummy.next;
};

// addTwoNumbers([2, 4, 3], [5, 6, 4]);
// @lc code=end
