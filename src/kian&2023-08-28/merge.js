/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// #56
const intervals = [
  [0, 5],
  [2, 6],
  [8, 10],
  [15, 18]
];
var mergeData = function (intervals) {
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    let flag = false;
    let res = [];
    for (let j = i + 1; j < intervals.length; j++) {
      let insert = [];
      let left = intervals[i][0];
      let right = intervals[i][1];

      let leftJ = intervals[j][0];
      let rightJ = intervals[j][1];

      if (left > leftJ || right > rightJ) {
        if (left < leftJ) {
          insert.push(left);
        } else {
          insert.push(leftJ);
        }

        if (right > rightJ) {
          insert.push(right);
        } else {
          insert.push(rightJ);
        }

        res = insert;
      }
    }
    if (!flag) {
      result.push([intervals[i][0], intervals[i][1]]);
    } else {
      result.push(res);
    }
  }

  return result;
};

// 先排序，然后对比前面的右边界是否超过后面的左边界，如果超过的话 表示区间有重合，这个时候
// 右边界更新为两者右边界的大值
// 注意的是 先要取出一个当作第一次对比的值
// 然后如果第一次比较 有重合 需要对比下一个 如果没有重合，结果添加到数组中，然后赋值给下次对比的值
var merge = function (intervals) {
  let list = intervals.sort((a, b) => a[0] - b[0]);
  let res = [];

  let prev = list[0];

  for (let i = 1; i < list.length; i++) {
    let current = list[i];

    if (prev[1] >= current[0]) {
      prev[1] = Math.max(prev[1], current[1]);
    } else {
      res.push(prev);
      prev = current
    }
  }

  res.push(prev)
  return res
};

merge(intervals);
