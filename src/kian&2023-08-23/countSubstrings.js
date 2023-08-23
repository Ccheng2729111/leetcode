/**
 * @param {string} s
 * @return {number}
 */

// #647
const s = 'aaa';
// 首先这里明确一下最后需要输出的是最多的回文，所以最后返回的是count
// 那么需要整理count的请加情况
// 1.每个单个字符都是一个回文，所以for循环到每一个的时候都+1
// 2,for循环到每一个的时候左右开始对比，只要符合条件就是left right不超边界并且左右相等的情况 都需要加1并且左右指针开始移动
// 3.直到循环完毕 输出count
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > 0) {
      aroundChar(i - 1, i + 1);
    }
    aroundChar(i, i + 1);
    count++;
    function aroundChar(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
      }
    }
  }
  return count;
};

countSubstrings(s);
