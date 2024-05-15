const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";


const input = fs.readFileSync(filePath).toString().trim().split(' ');

if(input%4===0) {
    if(input%100===0) {
        if(input%400===0) {
        console.log('1');
        } else {
            console.log('0');
        }
    } else {
        console.log('1');
    }
} else {
    console.log('0');
}