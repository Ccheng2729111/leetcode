/**
 * @param {number[]} seats
 * @return {number}
 */

//#849

// const seats = [1, 0, 0, 0, 1, 0, 1];
// const seats = [1, 0, 0, 0];
// const seats = [0, 1];
// const seats = [1, 0, 1];
// const seats = [1, 0, 0, 1];
// const seats = [0, 1, 0, 0, 0, 0];
const seats = [1,1,0,0,0,1,0]
var maxDistToClosest = function (seats) {
  let window = [];
  let max = 0;

  for (let i = 0; i < seats.length; i++) {
    //  如果window已经有1了并且是在最左边 并且当前遍历的数字是1那么符合条件 计算长度并且清空window
    if (window.indexOf(1) === 0 && seats[i] === 1) {
      window.push(1);

      if ((window.length - 1) % 2 === 0) {
        max = Math.max(max, (window.length - 1) / 2 - 0);
      } else {
        max = Math.max(
          max,
          window.length - 1 - ((window.length - 1) / 2 + 0.5)
        );
      }

      window.length = 0;
      // 这里需要注意 清空后需要保留1 不然后面计算可能会有问题
      window.push(1);
      continue;
    }
    // 如果window没有1  并且当前是1 并且当前window已经有值了，那么符合条件 计算长度并且清空window
    if (seats[i] === 1 && window.indexOf(1) === -1 && window.length !== 0) {
      window.push(1);
      max = Math.max(max, window.length - 1);
      window.length = 0;
      // 这里需要注意 清空后需要保留1 不然后面计算可能会有问题
      window.push(1)
      continue;
    }

    window.push(seats[i]);
  }

  if (window.length !== 0) {
    max = Math.max(max, window.length - 1);
  }

  return max;
};
maxDistToClosest(seats);
