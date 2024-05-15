const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";


const numbers = fs.readFileSync(filePath).toString().trim().split('\n')[1].split(' ').map(Number);


console.log(Math.min(...numbers)+' '+Math.max(...numbers));
