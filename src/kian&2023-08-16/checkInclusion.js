/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// #567
const s1 = 'abc';
const s2 = 'bbbca';

// 滑动窗口解决
// 左边界依然是窗口长度等于s2的时候左开始移
// 右边则是左移动完后右开始移
var checkInclusion = function (s1, s2) {
  let window = new Map();
  let sMap = new Map();

  for (let key in s1) {
    sMap.set(s1[key], sMap.get(s1[key]) ? sMap.get(s1[key]) + 1 : 1);
  }

  let L = 0;
  let R = 0;
  let vaild = 0;

  while (R <= s2.length) {
    let rc = s2[R];
    R++;

    if (sMap.has(rc)) {
      window.set(rc, window.get(rc) ? window.get(rc) + 1 : 1);
      // 如果字符相同的情况下 次数也相同 vaild++
      if (window.get(rc) === sMap.get(rc)) {
        vaild++;
      }
    }

    // console.log('(' + L + ',' + R + ']');

    while (R - L === s1.length) {
      if (vaild === sMap.size) {
        return true;
      } else {
        let lc = s2[L];
        L++;

        // 注意这里只有sMap有左边界的值的时候开始做操作
        if (sMap.has(lc)) {
          // 只有当lc值对应的次数相同的情况下 vaild-- 其他情况本身就没有+过 所以不做操作
          if (sMap.get(lc) === window.get(lc)) {
            vaild--;
          }
          // 不管其他的 只要sMap有的值 说明window的map也有，次数减1
          window.set(lc, window.get(lc) - 1);
        }
      }
    }
  }
  return false;
};

console.log(checkInclusion(s1, s2));
