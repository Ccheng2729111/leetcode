/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
/**
 这里需要明确的是每次需要进行对比的时候，都是从第0个元素进行对比的。所以prev只有在需要进行对比的时候才会赋值给哑巴节点，因为这里可能插入到首个节点之前，所以需要引入哑巴节点，指向head，然后遍历curr，如果curr.val大于curr.next.val那么这个时候需要把curr.next这个节点暂存temp，否则的话curr一直往后推进，然后有temp的时候跟前面所有的节点做对比，如果有prev.next.va>temp.val的话，这时候需要插入到prev到prev.next中间，那么这个时候先把temp.next=prev.next然后prev.next = temp 就完成了插入。
  */
 var insertionSortList = function(head) {
  let dummy = new ListNode(-1)
  dummy.next = head
  let curr = head
  let prev = null
  let temp = null

  while(curr && curr.next){
      if(curr.val<=curr.next.val){
          curr = curr.next
      }else{
          temp = curr.next
          curr.next = curr.next.next
          prev = dummy
          while(prev.next.val <= temp.val){
              prev = prev.next
          }
          temp.next = prev.next
          prev.next = temp
      }
  }

  return dummy.next
};
