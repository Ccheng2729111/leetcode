/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

  if(k===0 || !head || !head.next){
    return head
  }
 
   let p = head;
   let n = 1;
   while (p.next) {
     p = p.next;
     n++;
   }
 
   let add = n - (k % n);
 
   if (add === n) {
     return head;
   }
 
   p.next = head;
 
   while (add !== 0) {
     p = p.next;
     add--;
   }
 
 // 先赋值
   const res = p.next
 
   // 再断开
   p.next = null
 
   return res
 };
//找到倒数第k个
function findEndIndex(head, k) {
  let n = 0;
  let p = head;
  while (p !== null) {
    p = p.next;
    n++;
  }

  let p1 = head;

  for (let i = 0; i < n - k; i++) {
    p1 = p1.next;
  }

  return p1;
}
const head = [1, 2, 3, 4, 5];
const k = 2;
// rotateRight(head, k);
// @lc code=end
