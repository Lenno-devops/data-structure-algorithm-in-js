var subset = function (nums) {
  let result = [];
  let subset = [];
  result.push();

  var helperFn = (depth, position) => {
    console.log(
      `helperFn - depth:${depth}, position:${position}, subset:${subset}`
    );
    if (subset.length === depth) {
      result.push(subset.slice);
      console.log("PUSH: " + subset.slice());
      return;
    }

    //control horizontal position
    for (let i = position; i < nums.length; i++) {
      subset.push(nums[i]);
      helperFn(depth, i + 1);
      subset.pop();
    }
  };

  //control depth
  for (let i = 0; i < nums.length; i++) {
    console.log(`\n Depth = ${i + 1}`);
    helperFn(i + 1, 0);
  }

  return result;
};

let resultArr = subset([1, 2, 3]);
console.log(resultArr);

// var subsets = function (arr) {
//   let result = [];
//   let subset = [];

//   var dfs = function (index) {
//     if (index >= arr.length) {
//       result.push(subset.slice(0));
//       console.log("PUSH result: " + subset.slice(0));
//       return;
//     }

//     subset.push(arr[index]);
//     dfs(index + 1);

//     subset.pop();
//     dfs(index + 1);
//   };

//   dfs(0);
//   return result;
// };

// let resultArr = subsets([1, 2, 3]);
// console.log(resultArr);
