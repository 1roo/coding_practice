function solution(n) {
    let toThree = '';
    while (n > 0) {
        toThree = n % 3 + toThree;
        n = Math.floor(n / 3);
    }
    if (toThree === '') {
        toThree = '0';
    }

    toThree = toThree.split('').reverse().join('');

    
    let toTen = 0;
    for (let i = toThree.length - 1; i >= 0; i--) {
        toTen += parseInt(toThree[i]) * Math.pow(3, toThree.length - 1 - i);
    }
    
    
    return toTen;
}

