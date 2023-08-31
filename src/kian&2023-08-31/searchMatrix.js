/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];
const target = 32;
var searchMatrix = function (matrix, target) {
  const list = matrix.reduce((prev, cur) => prev.concat(cur), []);
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (list[mid] === target) {
      return true;
    } else if (list[mid] < target) {
      left = mid + 1;
    } else if (list[mid] > target) {
      right = mid - 1;
    }
  }
  return false;
};
searchMatrix(matrix, target);
