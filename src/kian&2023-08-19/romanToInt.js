/**
 * @param {string} s
 * @return {number}
 */

// #13
const s = 'LVIII';
/**
 * 
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
  X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
  C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000

 */

var romanToInt = function (s) {
  let window = new Map();
  let res = [];
  let char = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let L = 0;
  let R = 0;

  while (R < s.length) {
    let rc = s[R];
    window.set(rc, window.get(rc) ? window.get(rc) + 1 : 1);
  }
};

romanToInt(s);
