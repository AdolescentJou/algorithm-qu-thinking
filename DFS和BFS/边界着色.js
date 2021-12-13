/* 
	给你一个大小为 m x n 的整数矩阵 grid ，表示一个网格。另给你三个整数 row、col 和 color 。
	网格中的每个值表示该位置处的网格块的颜色。

	当两个网格块的颜色相同，而且在四个方向中任意一个方向上相邻时，它们属于同一 连通分量 。

	连通分量的边界 是指连通分量中的所有与不在分量中的网格块相邻（四个方向上）的所有网格块，
	或者在网格的边界上（第一行/列或最后一行/列）的所有网格块。

	请你使用指定颜色 color 为所有包含网格块 grid[row][col] 的 连通分量的边界 进行着色，并返回最终的网格 grid 。


	示例 1：

	输入：grid = [[1,1],[1,2]], row = 0, col = 0, color = 3
	输出：[[3,3],[3,2]]

*/
var colorBorder = function (grid, row, col, color) {
	var initColor = grid[row][col];
	var dfs = (grid, row, col) => {
	  if (
	    row < 0 ||
	    row == grid.length ||
	    col < 0 ||
	    col == grid[0].length ||
	    grid[row][col] != initColor
	  ) {
	    return;
	  }
      
	  grid[row][col] = "A";
	  if (
	    row - 1 >= 0 &&
	    row + 1 < grid.length &&
	    col - 1 >= 0 &&
	    col + 1 < grid[0].length
	  ) {
	    if (
	      (grid[row + 1][col] == "A" || grid[row + 1][col] == initColor || grid[row + 1][col] == "Q") &&
	      (grid[row - 1][col] == "A" || grid[row - 1][col] == initColor || grid[row - 1][col] == "Q") &&
	      (grid[row][col + 1] == "A" || grid[row][col + 1] == initColor || grid[row][col + 1] == "Q") &&
	      (grid[row][col - 1] == "A" || grid[row][col - 1] == initColor || grid[row][col - 1] == "Q")
	    ) {
	      grid[row][col] = "Q";
	    }
	  }
	  dfs(grid, row + 1, col);
	  dfs(grid, row - 1, col);
	  dfs(grid, row, col + 1);
	  dfs(grid, row, col - 1);
	};
	dfs(grid, row, col);
	for (var i = 0; i < grid.length; i++) {
	  for (var j = 0; j < grid[0].length; j++) {
	    if (grid[i][j] == "A") {
	      grid[i][j] = color;
	    }
	    if (grid[i][j] == "Q") {
	      grid[i][j] = initColor;
	    }
	  }
	}
	return grid;
      };
      console.log(
	colorBorder(
	  [
	    [2, 1, 3, 2, 1, 1, 2],
	    [1, 2, 3, 1, 2, 1, 2],
	    [1, 2, 1, 2, 2, 2, 2],
	    [2, 1, 2, 2, 2, 2, 2],
	    [2, 3, 3, 3, 2, 1, 2],
	  ],
	  4,
	  4,
	  3
	)
      );
      