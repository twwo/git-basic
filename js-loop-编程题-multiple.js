var str = new Array();
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    let instr = `${i}*${j}=${i * j}`;
    str.push(instr + " ");
  }
  str.push("\n");
}
console.log(str.join(""));
