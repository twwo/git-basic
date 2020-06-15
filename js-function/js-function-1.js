function reverseString(message) {
  let str = message.toString();
  let array = new Array();
  for (let i = 0; i < str.length; i++) {
    array.push(str[i]);
  }
  array.reverse();
  return array.join("");
}