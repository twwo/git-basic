function alphabetSort(message) {
  let str = message.toString();
  let list = new Array();
  for (let i = 0; i < str.length; i++) {
    list.push(str[i]);
  }
  str = list.sort().join("");
  return str;
}
