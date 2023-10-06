/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [];
  let res = [];
  if (root === null) return [];
  queue.push(root);
  // 队列维护节点
  while (queue.length !== 0) {
    let length = queue.length;
    let curArray = [];
    // 遍历队列 然后从头拿出节点放到数组里
    // 同时需要把左右节点放到队列后面，等待下次循环的时候去拿
    for (let i = 0; i < length; i++) {
      let cur = queue.shift();
      curArray.push(cur.val);

      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }

    res.push(curArray);
  }

  return res
};
// @lc code=end
