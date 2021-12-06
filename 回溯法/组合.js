/*
	给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
	你可以按 任何顺序 返回答案。
	示例 1：

	输入：n = 4, k = 2
	输出：
	[
	[2,4],
	[3,4],
	[2,3],
	[1,2],
	[1,3],
	[1,4],
	]
*/
var combine = function (n, k) {
  var ans = [];
  var dfs = (arr,idx) => {
    if (arr.length == k) {
      ans.push(arr);
      return;
    }
    for (var i = idx+1; i <= n; i++) {
      dfs([...arr, i],i);
    }
  };
  dfs([],0);
  console.log(ans);
  return ans;
};
combine(4,2)