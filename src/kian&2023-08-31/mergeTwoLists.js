/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  display() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
}

function arrayToLinkedList(arr) {
  const list = new LinkedList();
  for (const item of arr) {
    list.append(item);
  }
  return list;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// #21
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);
  let p = dummy;
  let p1 = arrayToLinkedList(list1);
  let p2 = arrayToLinkedList(list2);

  while (p1 !== null && p2 !== null) {
    if (p1.val > p2.val) {
      p.next = p2;
      p2 = p2.next;
    } else {
      p.next = p1;
      p1 = p1.next;
    }
    p = p.next;
  }

  // 如p1还没有循环完的话 剩下的拼接上p
  if (p1 !== null) {
    p.next = p1;
  }

  // 如p2还没有循环完的话 剩下的拼接上p
  if (p2 !== null) {
    p.next = p2;
  }

  return dummy.next;
};

const l1 = [1,2,4];const l2 = [1,3,4]
mergeTwoLists(l1,l2)
