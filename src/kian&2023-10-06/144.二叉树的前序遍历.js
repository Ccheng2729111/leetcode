/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  let resList = [];
  if (root === null) return resList;

  function trarver(node) {
    if (node === null) return null;
    resList.push(node.val);
    trarver(node.left);
    trarver(node.right);
  }

  trarver(root);
  return resList
};
// @lc code=end
