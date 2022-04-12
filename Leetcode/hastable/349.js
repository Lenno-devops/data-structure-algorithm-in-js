/*
//option 1 - two set to elimiate the duplicate, compare smaller set to larger set, put into array
//Time: O(m+n + n) , Space: O(m+n)
var intersection = function (nums1, nums2) {
  let findIntersection = function (setSmall, setLarge) {
    let result = [];
    for (num of setSmall) {
      if (setLarge.has(num)) result.push(num);
    }
    return result;
  };

  let setA = new Set(nums1);
  let setB = new Set(nums2);

  return setA.size < setB.size
    ? findIntersection(setA, setB)
    : findIntersection(setB, setA);
};

console.log(intersection([1, 2, 2, 1], [2, 2])); //2

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // 9,4 OR 4,9


*/
//option 2 - sort array, if match - move two pointer to next non duplicate values, ELSE move smaller poitner forward
//Time: O(n log n) , Space: O(1)
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b); //n log n
  nums2.sort((a, b) => a - b); //n log n

  let getOccurence = function (idx, arr) {
    let counter = 1;
    while (arr[idx] === arr[idx + 1] && idx + 1 < arr.length) {
      //n
      counter++;
      idx++;
    }
    return counter;
  };

  let result = [];
  let lp = 0;
  let rp = 0;

  while (lp < nums1.length && rp < nums2.length) {
    if (nums1[lp] === nums2[rp]) {
      result.push(nums1[lp]);
      lp += getOccurence(lp, nums1);
      rp += getOccurence(rp, nums2);
    } else {
      if (nums1[lp] < nums2[rp]) {
        lp += getOccurence(lp, nums1);
      } else {
        rp += getOccurence(rp, nums2);
      }
    }
  }

  return result;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); //2

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // 9,4 OR 4,9
