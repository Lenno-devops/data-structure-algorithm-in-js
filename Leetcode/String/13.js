//option 1 -
//Time: O(n) , Space: O(1)
var romanToInt = function (s) {
  //split char
  //convert to number
  //determine 1 or 2 represent char represent a integer value (add - subtract)
  //add up as tempCount

  //create mapping
  let map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  //let index = 0 ;
  let index = 0;
  //let tempCount = 0
  let tempCount = 0;

  //WHILE index < s.length
  while (index < s.length) {
    const temp = map.get(s[index]);
    //IF current < current + 1 char THEN it takes 2 char, first one will become deduct first
    if (index + 1 < s.length && temp < map.get(s[index + 1])) {
      //SET tempCount -= current value
      tempCount -= temp; //e.g. MCM => 1000 - 100(HERE) + 900
    } else {
      tempCount += temp; //e.g. MCM => 1000 - 100 + 900 (HERE)
    }
    index++;
  }
  //END WHILE

  return tempCount;
};

s = "III";
console.log(romanToInt(s)); //3

s = "LVIII";
console.log(romanToInt(s)); //58

s = "MCMXCIV";
console.log(romanToInt(s)); //1994
