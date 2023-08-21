/**
 * @param {string} s
 * @return {number}
 */

// #13
const ss = 'LVIII';
// 其实第一个想法是滑动窗口，但是做到后面发现不用那么复杂 直接一个on就结束了
// 无非是考虑一下三种特殊情况 然后判断一下加起来就行了
var romanToInt = function (s) {
  let window = [];
  let romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let res = 0;

  let R = 0;

  while (R < s.length) {
    let rc = s[R];
    window.push(rc);

    if (window[R - 1] && window[R - 1] === 'I') {
      if (rc === 'V') {
        res = res + 4 - 1;

        R++;
        continue;
      }

      if (rc === 'X') {
        res = res + 9 - 1;

        R++;
        continue;
      }
    }

    if (window[R - 1] && window[R - 1] === 'X') {
      if (rc === 'L') {
        res = res + 40 - 10;

        R++;
        continue;
      }

      if (rc === 'C') {
        res = res + 90 - 10;

        R++;
        continue;
      }
    }

    if (window[R - 1] && window[R - 1] === 'C') {
      if (rc === 'D') {
        res = res + 400 - 100;

        R++;
        continue;
      }

      if (rc === 'M') {
        res = res + 900 - 100;

        R++;
        continue;
      }
    }

    res += romanMap[rc];

    R++;
  }

  return res;
};

romanToInt(ss);
