// Complete the following procedure, the 'name'
// variable in all letters to uppercase, output: ' 'HELLO' '.
var name = "hello";
// TODO write your code here...
name = name.toUpperCase();
console.log(`\'${name}\'`);

// Complete the following procedure,
// capitalizing all the words in the variable
// sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = "good afternoon, mr mike.";
//TODO write your code here...
var split = sentence.toLowerCase().split(" ");
for (let i = 0; i < split.length; i++) {
  let head = split[i].charAt(0);
  head = head.toUpperCase();
  split[i] = head + split[i].substr(1);
}
console.log(split.join(" "));

// Complete the following procedure
// to extract the amount of money variable, output: 20.
var money = "￥20";
//TODO write your code here...
console.log(money.replace("￥", ""));