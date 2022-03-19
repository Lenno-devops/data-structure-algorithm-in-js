/*
//option 1 - One pass, 2 hash map, store first appear & counter, real time calculate minLength for multiple candidate
//Time: O(n), Space: O(2M) = O(M)
var findShortestSubArray = function (nums) {
  let firstMap = new Map();
  let countMap = new Map();

  let degree = -1;
  let minLength = -1;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    //store index when first met
    if (!firstMap.has(num)) {
      firstMap.set(num, i);
    }

    //update count map repeatly
    let count = 0;
    if (countMap.has(num)) {
      count = countMap.get(num);
    }
    countMap.set(num, count + 1);

    //check degree < current count
    if (degree < count) {
      //update degree and minLength (current idx - first meet index + 1)
      degree = count;
      minLength = i - firstMap.get(num) + 1;
    } else if (degree === count) {
      //if degree === current count, multiple value meet degree
      //compare with previous minLenght to find minimum vlaue
      minLength = Math.min(minLength, i - firstMap.get(num) + 1);
    }
  }

  return minLength;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1])); //2
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])); //6
*/

//option 2 - One pass, one map to store value object with fields, find all match degree candidates, compare minLength
//Time: O(2n) = O(N), Space: O(m)
var findShortestSubArray = function (nums) {
  //return 1 if nums only contains 1 element
  if (nums.length === 1) return 1;

  //initial map, maxDegree, minLength, currObj
  let map = new Map();
  let maxDegree = Number.MIN_SAFE_INTEGER;
  let minLength = Number.MAX_SAFE_INTEGER;
  let currObj = null;

  //loop from 0 to length -1
  for (let i = 0; i < nums.length; i++) {
    //if value not exist in map, create new object with first index = curr index
    if (!map.has(nums[i])) {
      currObj = {};
      currObj.first = i;
      currObj.count = 0;
    } else {
      //if already exist in map, set as currObj
      currObj = map.get(nums[i]);
    }
    currObj.last = i;
    currObj.count += 1;

    //push object into the map
    map.set(nums[i], currObj);

    //update maxDegree if needed
    if (maxDegree < currObj.count) {
      maxDegree = currObj.count;
      minLength = currObj.last - currObj.first + 1;
    } else if (maxDegree === currObj.count) {
      minLength = Math.min(minLength, currObj.last - currObj.first + 1);
    }
  }

  //return minLength
  return minLength;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1])); //2
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])); //6
