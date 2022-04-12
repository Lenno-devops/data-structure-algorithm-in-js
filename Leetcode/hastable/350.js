//option 1 - store shorter list into hashmap <key, frequency>, loop through larger list to check exist in map. If exist && freq >= 1 then push into result[] and val -1;
//Time: O(N+M) , Space: O(min(m,N))
var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) return intersect(nums2, nums1);

  let fillInMap = function (nums) {
    for (num of nums) {
      numMap.set(num, numMap.has(num) ? numMap.get(num) + 1 : 1);
    }
    return numMap;
  };

  let findIntersection = function (nums) {
    for (num of nums) {
      if (numMap.has(num) && numMap.get(num) >= 1) {
        result.push(num);
        numMap.set(num, numMap.get(num) - 1);
      }
    }
  };

  let numMap = new Map();
  let result = [];
  fillInMap(nums1);
  findIntersection(nums2);

  return result;
};

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersect(nums1, nums2)); //[2,2]

(nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4]);
console.log(intersect(nums1, nums2)); //[4,9]

/*
//option 2 - sort array, compare two arrays, if match, store elememnt into result arr[], otherwise move smaller forward
//Time: O(n log n), Space: O(min(m,n))
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let result = [];
  let lp = 0,
    rp = 0;

  while (lp < nums1.length && rp < nums2.length) {
    if (nums1[lp] === nums2[rp]) {
      result.push(nums1[lp]);
      lp++;
      rp++;
    } else {
      nums1[lp] < nums2[rp] ? lp++ : rp++;
    }
  }

  return result;
};

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersect(nums1, nums2)); //[2,2]

(nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4]);
console.log(intersect(nums1, nums2)); //[4,9]

//4 5 9
//4 4 8 9 9
*/
