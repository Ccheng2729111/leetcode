/**
 * @param {string} s
 * @return {string[]}
 */

// #187
// const s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';
const s = 'AAAAAAAAAAA';
var findRepeatedDnaSequences = function (s) {
  let res = [];

  let L = 0;
  let R = 0;
  let vaild = 0;
  let window = new Map();

  while (R < s.length) {
    let rc = s[R];
    R++;
    if (window.get(rc) && window.get(rc) === 1) {
      vaild++;
    }
    window.set(rc, window.get(rc) ? window.get(rc) + 1 : 1);

    console.log('(' + L + ',' + R + ']');

    while (R - L === 10) {
      if (window.size === vaild) {
        res.push(s.slice(L, R));
      }

      let lc = s[L];
      L++;

      if (window.get(lc) && window.get(lc) === 2) {
        vaild--;
      }

      window.set(lc, window.get(lc) - 1);
    }
  }
  console.log(res);
  return res;
};

// 这里其实第一反应就是需要一个map去查看是否有key对应的值 如果有的话表示之前出现过
// 然后用一个遍历来遍历字符串，注意循环条件，如果i+10大于s的长度的话，表示不用继续遍历了，因为长度固定是10
// 最后在遍历的时候拿到长度是10 开头是i结尾是i+10的字符串 判断map中是否有过 如果有直接添加到结果数组 否则的话添加到map中
var findRepeatedDnaSequence2 = function (s) {
  let resMap = new Map();
  let res = [];
  for (let i = 0; i + 10 <= s.length; i++) {
    let dnsStr = s.slice(i, i + 10);
    if (resMap.get(dnsStr)) {
      // resMap.set(dnsStr, resMap.get(dnsStr) + 1);
      res.indexOf(dnsStr) === -1 && res.push(dnsStr);
    } else {
      resMap.set(dnsStr, 1);
    }
  }
  return res
};

findRepeatedDnaSequence2(s);
