var fruit = {
  apple: 20,
  pear: 20,
  peach: 10,
};
var piece = 0;
let attr = new Array();
attr = Object.keys(fruit);
attr.forEach(function (item, index, array) {
  piece += fruit[item];
});
console.log(piece);
