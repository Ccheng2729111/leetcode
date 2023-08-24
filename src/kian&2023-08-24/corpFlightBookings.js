/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */

// #1109
const bookings = [
  [1, 2, 10],
  [2, 3, 20],
  [2, 5, 25]
];
const n = 5;
var corpFlightBookings = function (bookings, n) {
  // 因为这里第一个数字保留 所以数组长度需要加1
  let diff = new Array(n + 1).fill(0);

  bookings.forEach((i) => {
    let left = i[0];
    let right = i[1];
    let count = i[2];
    diff[left - 1] += count;
    diff[right] -= count;
  });

  let res = new Array(n).fill(0);

  res[0] = diff[0];
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] + diff[i];
  }
  return res
};

corpFlightBookings(bookings, n);
