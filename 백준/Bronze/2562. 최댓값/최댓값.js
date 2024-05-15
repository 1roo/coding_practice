const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";


const numbers = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);


console.log(Math.max(...numbers));
console.log(numbers.indexOf(Math.max(...numbers))+1);


