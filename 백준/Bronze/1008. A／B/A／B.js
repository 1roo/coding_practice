const fs = require('fs');
const [A, B] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);


console.log(Math.floor((A / B) * 1e9) / 1e9);