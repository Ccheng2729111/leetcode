/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// #57
const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
const newInterval = [4, 8];
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  let list = intervals.sort((a, b) => a[0] - b[0])

  let result = []

  let prev = list[0];

  for (let i = 1; i < list.length; i++) {
    let cur = list[i];
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(prev[1], cur[1]);
    } else {
      result.push(prev);
      prev = cur
    }
  }

  result.push(prev)

  return result
};

insert(intervals, newInterval);
