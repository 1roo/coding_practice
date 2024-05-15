const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";

const [A, B] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

A>B ? console.log('>') :  A<B ? console.log('<') : console.log('==');