const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";
// const [A, B] = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);
// const [A, B] = fs.readFileSync("input.txt").toString().trim().split(' ').map(Number);

const [A, B] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let unit = B % 10;
let ten = Math.floor((B/10)%10);
let hund = Math.floor(B/100);

console.log(`${A*unit}
${A*ten}
${A*hund}
${A*B}`);