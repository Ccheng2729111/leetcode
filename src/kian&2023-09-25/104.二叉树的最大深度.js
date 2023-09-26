/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
  if (root === null || root.left === null || root.right === null) {
    return;
  }

  let deep = 0;
  let maxDeep = 0;

  function traverse(node) {
    // 进入节点的时候++
    deep++;

    //如果node.left||node.right是null表示已经进入最底层的节点了
    if (node.left === null || node.right === null) {
      maxDeep = Math.max(maxDeep, deep);
    }

    node.left && traverse(node.left);
    node.right && traverse(node.right);
    deep--;
    // 出去节点的时候--
  }

  traverse(root);
};
// @lc code=end
