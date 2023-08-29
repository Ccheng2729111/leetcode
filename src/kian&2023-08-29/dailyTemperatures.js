/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
var dailyTemperatures = function (temperatures) {
  let strack = [];
  let result = Array.from(temperatures.length).fill(0);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (
      strack.length &&
      temperatures[strack[strack.length - 1]] <= temperatures[i]
    ) {
      strack.pop();
    }
    result[i] = strack.length ? strack[strack.length - 1] - i : 0;
    strack.push(i);
  }
  return result;
};
dailyTemperatures(temperatures);
