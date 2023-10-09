/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  const queue = [];
  if (root === null) return null;
  queue.push(root);
  while (queue.length) {
    let length = queue.length;
    // [1] [2,3] [4,5]
    for (let i = 0; i < length; ++i) {
      let cur = queue.shift();
      // 这个时候需要注意 前一个节点已经把左右塞进去了，所以不能直接取queue[0]而是需要判断当前循环的节点是否是小于当前层的长度-1
      cur.next = i<length-1?queue[0]:null
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
  }

  return root;
};
// @lc code=end

