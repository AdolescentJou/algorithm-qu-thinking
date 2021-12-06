/* 
	找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
	说明：

	所有数字都是正整数。
	解集不能包含重复的组合。 

	示例 1:

	输入: k = 3, n = 7
	输出: [[1,2,4]]
*/

var combinationSum3 = function (k, n) {
  var ans = [];
  candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var backtrack = (arr, index) => {
    if (arr.reduce((pre, cur) => pre + cur, 0) > n || arr.length > k) {
      return;
    }
    if (arr.reduce((pre, cur) => pre + cur, 0) === n && arr.length === k) {
      ans.push([...arr]);
      return;
    }
    var arr = [...arr];
    for (var i = index; i < candidates.length; i++) {
      arr.push(candidates[i]);
      backtrack(arr, i + 1);
      arr.pop();
    }
  };
  backtrack([], 0);
  return ans;
};
console.log(combinationSum3(2, 7));
