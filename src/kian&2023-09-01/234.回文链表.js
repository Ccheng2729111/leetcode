/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }

  for (let i = 0, j = list.length - 1; i < j; i++, j--) {
    if (list[i] !== list[j]) {
      return false;
    }
  }

  return true;
};

// isPalindrome([1, 2, 2, 1]);
// @lc code=end
