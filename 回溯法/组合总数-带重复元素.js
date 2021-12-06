/* 
	给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
	candidates 中的每个数字在每个组合中只能使用一次。
	注意：解集不能包含重复的组合。 

	示例 1:

	输入: candidates = [10,1,2,7,6,1,5], target = 8,
	输出:
	[
		[1,1,6],
		[1,2,5],
		[1,7],
		[2,6]
	]
*/
var combinationSum2 = function (candidates, target) {
  var ans = [];
  candidates = candidates.sort((a, b) => a - b);
  var backtrack = (arr, index) => {
    if (arr.reduce((pre, cur) => pre + cur, 0) > target) {
      return;
    }
    if (arr.reduce((pre, cur) => pre + cur, 0) === target) {
      ans.push([...arr]);
      return;
    }
    var arr = [...arr];
    for (var i = index; i < candidates.length; i++) {
      arr.push(candidates[i]);
      backtrack(arr, i + 1);
      var pre = arr.pop();
      while (candidates[i+1] === pre) {
        i++;
      }
    }
  };
  backtrack([], 0);
  return ans;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
