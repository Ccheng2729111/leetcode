/*
 * @lc app=leetcode.cn id=1333 lang=javascript
 *
 * [1333] 餐厅过滤器
 */

// @lc code=start
/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function (
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance
) {
  let resourceList = [];
  resourceList = restaurants.filter(
    (i) =>
      i[3] <= maxPrice &&
      i[4] <= maxDistance &&
      (veganFriendly ? i[2] : i[2] || !i[2])
  );
  resourceList.sort((a, b) => {
    if (b[1] === a[1]) {
      return b[0] - a[0];
    } else {
      return b[1] - a[1];
    }
  });

  let res = resourceList.map((i) => i[0]);

  return res;
};

filterRestaurants(
  [
    [1, 4, 1, 40, 10],
    [2, 8, 0, 50, 5],
    [3, 8, 1, 30, 4],
    [4, 10, 0, 10, 3],
    [5, 1, 1, 15, 1]
  ],
  0,
  30,
  3
);
// @lc code=end
