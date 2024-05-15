const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "input.txt";

const [A, B] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);


if(B<45) {
    if(A===0) {
        console.log('23 '+(B+15))
    } else {
        console.log(A-1+' '+(B+15))
    }
} else {
    console.log(A+' '+(B-45))
}

