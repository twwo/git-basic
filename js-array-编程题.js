// The writer determines whether the
// following variables are of type array.
var a = "[a, b, c, d]";
var b = [1, 2, 3, 4];
//TODO
//b是正确的数组声明方式

// Write a program that multiplies each
// entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a = a.map(function (item, index, array) {
  return item * 2;
});

// Write the program, according to
// the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(" "));
console.log(colors.join("+"));
console.log(colors.join(","));

// Write a program to sort the
// Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(
  a.sort(function (val1, val2) {
    if (val1 > val2) {
      return -1;
    } else if (val1 < val2) {
      return 1;
    } else {
      return 0;
    }
  })
);

// Program to find the most frequent element
//  in the following array.
var a = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
//TODO should output: 'a'
var map = new Map();
a.forEach(function (item, index, array) {
  if (map.has(item)) {
    map.set(item, map.get(item) + 1);
  } else {
    map.set(item, 1);
  }
});
console.log(map);
var fre = 0;
var freval;
map.forEach(function (value, key) {
  if (freval == undefined) {
    freval = key;
    fre = value;
  } else {
    if (fre < value) {
      fre = value;
      freval = key;
    }
  }
});
console.log(freval);
