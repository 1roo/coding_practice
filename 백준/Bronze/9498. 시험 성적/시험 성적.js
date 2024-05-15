const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";


const input = fs.readFileSync(filePath).toString().trim().split(' ');

console.log(input>=90? 'A' : input>=80? 'B' : input>=70? 'C' : input>=60? 'D' : 'F');