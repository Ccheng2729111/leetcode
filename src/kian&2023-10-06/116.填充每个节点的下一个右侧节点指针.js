/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
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
    for (let i = 0; i < length; ++i) {
      let cur = queue.shift();
      cur.next = i < length - 1 ? queue[0] : null;
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
  }

  return root;
};
// @lc code=end

const data = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
      next: {
        val: 5,
        left: null,
        right: null,
        next: {
          val: 6,
          left: null,
          right: null,
          next: { val: 7, left: null, right: null, next: null }
        }
      }
    },
    right: {
      val: 5,
      left: null,
      right: null,
      next: {
        val: 6,
        left: null,
        right: null,
        next: { val: 7, left: null, right: null, next: null }
      }
    },
    next: {
      val: 3,
      left: {
        val: 6,
        left: null,
        right: null,
        next: { val: 7, left: null, right: null, next: null }
      },
      right: { val: 7, left: null, right: null, next: null },
      next: {
        val: 4,
        left: null,
        right: null,
        next: {
          val: 5,
          left: null,
          right: null,
          next: {
            val: 6,
            left: null,
            right: null,
            next: { val: 7, left: null, right: null, next: null }
          }
        }
      }
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
      next: { val: 7, left: null, right: null, next: null }
    },
    right: { val: 7, left: null, right: null, next: null },
    next: {
      val: 4,
      left: null,
      right: null,
      next: {
        val: 5,
        left: null,
        right: null,
        next: {
          val: 6,
          left: null,
          right: null,
          next: { val: 7, left: null, right: null, next: null }
        }
      }
    }
  },
  next: null
};
