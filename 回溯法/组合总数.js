/*
	给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，
	找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。

	candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 

	对于给定的输入，保证和为 target 的唯一组合数少于 150 个。

	示例 1：
	输入: candidates = [2,3,6,7], target = 7
	输出: [[7],[2,2,3]]
*/

var combinationSum = function (candidates, target) {
  var ans = [];
  var dfs = (arr, index) => {
    if (sumArr(arr) > target) {
      return;
    }
    if (sumArr(arr) == target) {
      ans.push(arr);
    }
    for (var i = index; i < candidates.length; i++) {
      dfs([...arr, candidates[i]], i);
    }
  };
  dfs([], 0);
  return ans;
};
var sumArr = (arr) => {
  return arr.reduce((pre, cur) => pre + cur, 0);
};
combinationSum([2, 3, 6, 7], 7);
