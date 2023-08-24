/**
 * @param {number[][]} grid
 * @return {number}
 */
const grid =[[1,1,0,0],[0,0,1,0],[0,0,1,0],[0,0,0,1]]
// 这里注意审题，同一行或者同一列有另一个的话 表示可以通讯
// 这里可以用哈希表 表示行和列的数据，如果grid[i][j]是有数据的 列和行的map同时记录次数
// 那么第二次循环只要有数据的 这一行或者这一列有数据 count++就行
var countServers = function (grid) {
  let count = 0;
  let gridLength = grid.length;
  let lineLength = grid[0].length;

  let row = new Map();
  let col = new Map();

  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < lineLength; j++) {
      if (grid[i][j] === 1) {
        row.set(j, (row.get(j) || 0) + 1);
        col.set(i, (col.get(i) || 0) + 1);
      }
    }
  }

  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < lineLength; j++) {
      if (grid[i][j] === 1) {
        if ((row.has(j) && row.get(j) > 1) || (col.has(i) && col.get(i) > 1)) {
          count++;
        }
      }
    }
  }
  return count
};

countServers(grid);
