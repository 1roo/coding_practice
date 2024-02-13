function solution(n)
{
    let digits = String(n).split('');
    let sum = digits.reduce((total, digit) => total += parseInt(digit), 0);
    
    return sum;
}