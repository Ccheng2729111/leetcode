/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
// 遍历整棵树可以翻转
// 无非是前序，中序，后序的问题
var invertTree = function (root) {
  if (root === null) return null;
  function trarver(node) {
    if (node === null) return null;
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    trarver(node.left);
    trarver(node.right);
  }

  trarver(root);

  return root
};
// @lc code=end
