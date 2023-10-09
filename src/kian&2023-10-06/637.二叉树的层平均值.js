/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let queue = [];
  let res = [];

  if (root === null) return res;
  queue.push(root);
  while (queue.length) {
    let length = queue.length;
    let curArray = [];
    // 把当前的队列给处理掉 也就是每一层的节点
    for (let i = 0; i < length; ++i) {
      let cur = queue.shift();
      curArray.push(cur.val);
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
    let len = curArray.length;
    let sum = curArray.reduce((prev, cur) => (prev += cur), 0);
    let value = sum / len;
    res.push(value);
  }

  return res;
};
// @lc code=end
