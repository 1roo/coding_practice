function solution(numbers) {
    numbers.sort((a, b) => {
        let ab = '' + a + b;
        let ba = '' + b + a;
        return ba - ab;
    });

    const result = numbers.join('');

    return result[0] === '0' ? '0' : result;
}