
const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";


const input = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
const C = Number(input[2]);

console.log(arr.filter(arr => arr===C).length);