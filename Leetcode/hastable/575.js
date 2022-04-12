/*
//option 1 - store canday type in set to find unique combination, return min(unique type, total / 2)
//Time: O(n + n) , Space: O(k)
var distributeCandies = function (candyType) {
  //store array in set <type>
  let set = new Set(candyType);

  //calculate maxCandies = candyType.length / 2
  let maxCandies = candyType.length / 2;

  //FOREACH candyType in set
  return Math.min(set.size, candyType.length / 2);
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3])); //3

console.log(distributeCandies([1, 1, 2, 3])); //2

console.log(distributeCandies([6, 6, 6, 6])); //1
*/

//option 2 - sort array, find next unique value, update counter + 1 until meet the max candies or last element
//Time: O(n log n ) , Space: O(1)
var distributeCandies = function (candyType) {
  candyType.sort((a, b) => a - b);
  let maxCandies = candyType.length / 2;
  let counter = 1;

  for (let i = 1; i < candyType.length; i++) {
    if (candyType[i] !== candyType[i - 1]) {
      counter++;
      if (counter >= maxCandies) break;
    }
  }
  return counter;
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3])); //3

console.log(distributeCandies([1, 1, 2, 3])); //2

console.log(distributeCandies([6, 6, 6, 6])); //1
