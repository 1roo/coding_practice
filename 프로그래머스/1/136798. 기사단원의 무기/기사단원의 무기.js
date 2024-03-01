function solution(number, limit, power) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        let divisorCount = countOfYaksu(i);
        result += divisorCount > limit ? power : divisorCount;
    }
    return result;
}

function countOfYaksu(num) {
    let count = 0;
    for (let i = 1; i * i <= num; i++) {
        if (num % i === 0) {
            if (num / i !== i) {
                count += 2;
            } else {
                count += 1;
            }
        }
    }
    return count;
}