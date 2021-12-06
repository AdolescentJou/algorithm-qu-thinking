/*
	给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。
	返回所有可能得到的字符串集合。

 

	示例：
	输入：S = "a1b2"
	输出：["a1b2", "a1B2", "A1b2", "A1B2"]

	输入：S = "3z4"
	输出：["3z4", "3Z4"]

	输入：S = "12345"
	输出：["12345"]
*/
var letterCasePermutation = function (s) {
  var ans = [];
  var backtrack = (str, i) => {
    if (i === s.length) {
      ans.push(str);
      return;
    }
    var char = s[i];
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      backtrack(str + char.toLowerCase(), i + 1);
      backtrack(str + char.toUpperCase(), i + 1);
    } else {
      backtrack(str + char, i + 1);
    }
  };
  backtrack("", 0);
  return ans;
};
console.log(letterCasePermutation("ab1"));
