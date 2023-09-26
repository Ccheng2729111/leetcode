/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  if (root === null) return 0;
  let maxDistance = 0;
  function traverse(node) {
    if (node === null) return 0;
    let leftDeep = maxDepth(node.left);
    let rightDeep = maxDepth(node.right);
    let distanceValue = leftDeep + rightDeep;
    maxDistance = Math.max(distanceValue, maxDistance);

    traverse(node.left);
    traverse(node.right);
  }

  // 获取树的最大深度
  function maxDepth(node) {
    if (node === null) {
      return 0;
    }
    let maxDeepLeft = maxDepth(node.left);
    let maxDeepRight = maxDepth(node.right);

    return 1 + Math.max(maxDeepLeft, maxDeepRight);
  }

  traverse(root);

  return maxDistance;
};
// @lc code=end
