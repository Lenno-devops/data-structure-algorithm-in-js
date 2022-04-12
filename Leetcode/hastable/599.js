//option 1 - store shorter list into map with index, loop through longer list to see if exist in map, calculate min length
//Time: O(n+m) , Space: O(min(n,m))
var findRestaurant = function (list1, list2) {
  //find a common item
  //find least index sum (two indexs from two arrays)

  //if s2 longer then s1, switch s1, s2
  if (list2.length > list1.length) findRestaurant(list2, list1);

  let map = new Map(); //<rest, idx>
  //SET minIndexSum = Max integer
  let minIdxSum = Number.MAX_SAFE_INTEGER;
  //SET commonRest = "";
  let commonRest = [];

  //loop through s2 (shorter)
  for (let i = 0; i < list2.length; i++) {
    //put element in map with idx
    map.set(list2[i], i);
  }

  //loop through s1 (longer)

  for (let i = 0; i < list1.length; i++) {
    if (i > minIdxSum) break;
    //IF element exist in s2 THEN
    if (map.has(list1[i])) {
      //IF current index + index in s2 < minIndexSum THEN
      let tempIdxSum = i + map.get(list1[i]);
      if (tempIdxSum < minIdxSum) {
        //rest = element
        commonRest = [];
        commonRest.push(list1[i]);
        minIdxSum = tempIdxSum;
      } else if (tempIdxSum === minIdxSum) {
        commonRest.push(list1[i]);
      }
    } //END IF
  } //END LOOP

  return commonRest;
};

(list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]),
  (list2 = [
    "Piatti",
    "The Grill at Torrey Pines",
    "Hungry Hunter Steakhouse",
    "Shogun",
  ]);
console.log(findRestaurant(list1, list2)); //["Shogun"]

(list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]),
  (list2 = ["KFC", "Shogun", "Burger King"]);
console.log(findRestaurant(list1, list2)); //["Shogun"]

(list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"]),
  (list2 = ["KFC", "Burger King", "Tapioca Express", "Shogun"]);
console.log(findRestaurant(list1, list2)); //["KFC","Burger King","Tapioca Express","Shogun"]
