
const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";


const input = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input[0].split(' ').map(Number);
const C = Number(input[1]);

let hour = arr[0];
let min = arr[1] + C;

if(min>=60) {
    hour +=Math.trunc(min/60);
    min %= 60;
}
hour %= 24;
console.log(hour+' '+min);