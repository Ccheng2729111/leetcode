/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// #57
const intervals = [[1,5]];
const newInterval = [6, 8];
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  let list = intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  let prev = list[0];

  for (let i = 1; i < list.length; i++) {
    let cur = list[i];
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(prev[1], cur[1]);
    } else {
      result.push(prev);
      prev = cur;
    }
  }

  result.push(prev);

  return result;
};

var insert1 = function (intervals, newInterval) {
  let result = [];

  let size = intervals.length;
  let i = 0;

  // 处理左边界 如果当前遍历的右边界小于目标的左边界 则符合
  while (i < size && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i++]);
  }

  // 这里需要注意 因为本身的排序已经按照左边界排过了 所以这里交集的左边界已经可以确认为目标和当前遍历左边界的最小值
  // 然后判断遍历的左边界是否小于目标的右边界，如果是的，那么需要更新目标右边界为两者的右边界的最大值
  // 一直到遍历的左边界大于目标的右边界，最后推到结果中
  if (i < size) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    while (i < size && intervals[i][0] <= newInterval[1]) {
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      i++;
    }
  }
  result.push(newInterval);

  // 处理右边没有重叠的部分
  while (i < size && intervals[i][0] > newInterval[1]) {
    result.push(intervals[i++]);
  }

  return result;
};

insert1(intervals, newInterval);
