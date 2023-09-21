/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 找到中位点
var reverseString = function (s) {
  let mid = Math.floor(s.length / 2);
  let i = 0;
  while (i < mid) {
    let exChangeIndex =
      s.length % 2 !== 0 ? mid - i + 1 + mid - 1 : mid - i + 1 + mid - 2;
    let ex = s[exChangeIndex];
    s[exChangeIndex] = s[i];
    s[i] = ex;
    i++;
  }
};
// reverseString(['h', 'e', 'l', 'l', 'o']);
reverseString(['H', 'a', 'n', 'n', 'a', 'h']);
// @lc code=end
