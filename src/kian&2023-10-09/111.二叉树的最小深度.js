/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;

  let queue = [root];
  let minDeep = 0;
  let flag = false;
  while (queue.length) {
    let length = queue.length;
    if (flag) {
      return minDeep;
    }
    for (let i = 0; i < length; ++i) {
      let cur = queue.shift();
      if (cur.left === null && cur.right === null) {
        flag = true;
      }
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    minDeep++;
  }

  return minDeep;
};
// @lc code=end
