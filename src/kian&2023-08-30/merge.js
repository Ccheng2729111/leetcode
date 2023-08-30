/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const intervals = [
  [1, 3],
  [2, 6],
  [5, 10],
  [15, 18]
];
var merge = function (intervals) {
  let prev = intervals[0];
  let result = [];

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (prev[1] >= cur[0]) {
      prev = [prev[0], cur[1]];
      result.push(prev)
    } else {
      result.push(cur);
    }
  }

  return result
};

merge(intervals)
