/**
 * @param {number} x
 * @return {boolean}
 */

// #9
const x = -1;
var isPalindrome = function (x) {
  let str = String(x);
  let list = [];

  // 这里特殊一点，转换成可遍历的数组
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      list.push(parseInt(`-${str[i + 1]}`));
      i++;
    } else {
      list.push(parseInt(str[i]));
    }
  }

  let L = 0;
  let R = list.length - 1;

  // 这里就是正常的双指针 左右相同的话 同时向内 否则表示不是回文数
  while (L < R) {
    if (list[L] === list[R]) {
      L++;
      R--;
    } else {
      return false;
    }
  }

  // 这里边界值判断一下 如果L===R的话代表list长度是1
  // 如果是长度是1的话 只需要判断里面的值是大于0还是小于0
  // 如果大于0 是回文数 否则不是
  if ((L === R)) {
    if (list[L] >= 0) {
      return true;
    } else {
      return false;
    }
  }

  return true;
};

isPalindrome(x);
