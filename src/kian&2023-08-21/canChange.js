/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */

var canChange = function (start, target) {
  for (let i = 0; i < start.length; i++) {
    if (start === target) {
      return true;
    }
    if (start[i] === 'L' && start[i - 1] === '_' && start !== target) {
      start = start.substring(0, i - 1) + 'L_' + start.substring(i + 1);
      if (start === target) {
        return true;
      }
    }
    if (start[i] === 'R' && start[i + 1] === '_' && start !== target) {
      start = start.substring(0, i) + '_R' + start.substring(i + 2);
      if (start === target) {
        return true;
      }
    }
  }
  return false;
};

const start = '_L__R__RL';
const target = 'L_____RLR';
var canChange2 = function (start, target) {
  // 因为L和R不能左右互相穿透 所以 去除掉_后 如果不想等 那只有是false了
  if (start.replaceAll('_', '') !== target.replaceAll('_', '')) {
    return false;
  }

  let len = start.length;
  let j = 0;

  for (let i = 0; i < len; i++) {
    // 如果是_符号直接跳过
    if (start[i] === '_') {
      continue;
    }

    // 如果是_符号直接跳过
    while (target[j] === '_') {
      j++;
    }

    // 如果start找到的不是_的字符 是L的话 并且i<j的话 表示无论start的这个L往左移动几位都无法满足target对应的L
    // 因为L只能往左移 比如__L 和___L 这个时候L没法相同了已经
    // 所以返回false
    if (i !== j && start[i] === 'L' && i < j) {
      return false;
    }

    // 同上 如果R对应的i>j的话那么无法相同了已经
    if (i !== j && start[i] === 'R' && i > j) {
      return false;
    }
    j++;
  }

  return true;
};

canChange2(start, target);
