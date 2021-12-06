/* 
	n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

	给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

	每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

	输入：n = 4
	输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
	解释：如上图所示，4 皇后问题存在两个不同的解法。

*/

var solveNQueens = function (n) {
  if (n === 1) return ["Q"];
  if (n == 2 || n == 3) return [];
  var ans = [];
  var columns = new Array(n).fill(0);
  var diagonalsArr1 = new Array(2 * n - 1).fill(0);
  var diagonalsArr2 = new Array(2 * n - 1).fill(0);
  var temp = new Array(n).fill([]).map((item) => new Array(n).fill("."));
  var backTrack = (arr, row, columns, diagonalsArr1, diagonalsArr2) => {
    if (row === n) {
      ans.push(arr.map((item) => item.slice()).map((item) => item.join("")));
      return;
    }
    for (var i = 0; i < n; i++) {
      if (columns[i]) {
        continue;
      }
      var diagonals1 = row - i > 0 ? row - i + n : Math.abs(row - i);
      if (diagonalsArr1[diagonals1]) {
        continue;
      }
      var diagonals2 = row + i;
      if (diagonalsArr2[diagonals2]) {
        continue;
      }
      arr[row][i] = "Q";
      columns[i] = 1;
      diagonalsArr1[diagonals1] = 1;
      diagonalsArr2[diagonals2] = 1;
      backTrack(
        arr.map((item) => item.slice()),
        row + 1,
        [...columns],
        [...diagonalsArr1],
        [...diagonalsArr2]
      );
      arr[row][i] = ".";
      columns[i] = 0;
      diagonalsArr1[diagonals1] = 0;
      diagonalsArr2[diagonals2] = 0;
    }
  };
  backTrack(temp, 0, columns, diagonalsArr1, diagonalsArr2);
  return ans;
};
console.log(solveNQueens(4));
