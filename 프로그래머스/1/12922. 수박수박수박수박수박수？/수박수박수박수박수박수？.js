function solution(n) {
    let str = '';
    if(n === 1) {
        return '수';
    } else {
            for (let i = 1; i <= n/2; i++) {
                str += '수박';
            }
            if(n%2 === 1) {
                str += '수';
            }
            
        }
    
    return str;
}