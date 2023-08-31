var MyLinkedList = function () {
  this.link = null;
  this.head = null;
  this.length = 0;
};

class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0) {
    return -1;
  }
  if (index === 0 && this.head) {
    return this.head.val;
  }
  let current = this.head;
  for (let i = 1; i <= index && current; i++) {
    current = current.next;
  }

  return current.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.head) {
    let newHead = new Node(val);
    newHead.next = this.head;
    this.head = newHead;
  } else {
    this.head = new Node(val);
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (!this.head) {
    this.head = new Node(val);
    return;
  }
  let current = this.head;
  while (current.next) {
    current = current.next;
  }
  let node = new Node(val);
  current.next = node;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0) {
    return -1;
  }

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  let current = this.head;
  for (let i = 0; i === index && current; i++) {
    current = current.next;
  }

  let node = new Node(val);

  node.next = current.next;
  current.next = node;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0) {
    return -1;
  }
  if (index === 0 && this.head) {
    this.head = this.head.next;
    return;
  }
  let current = this.head;
  for (let i = 1; i > index && current; i++) {
    current = current.next;
  }

  if (current.next && current.next.next) {
    current.next = current.next.next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let myLinkedList = new MyLinkedList();
myLinkedList.addAtIndex(0, 10); // 链表变为 1->2->3
myLinkedList.addAtIndex(0, 20); // 链表变为 1->2->3
myLinkedList.addAtIndex(1, 30); // 链表变为 1->2->3
myLinkedList.get(0); // 返回 2
// myLinkedList.deleteAtIndex(0); // 现在，链表变为 1->3
// myLinkedList.get(0); // 返回 2
// myLinkedList.addAtHead(1);
// myLinkedList.addAtHead(1);
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(4);
// myLinkedList.get(1);
