function solution(num) {

    var count = 0;
    if(num===1) {
        return 0;
    } else {
        for(let i=1; i<=500; i++) {
            if(num%2===0) {
                num=num/2;
                count++;
            } else {
                num=(num)*3+1;
                count++;
            } if(num === 1) {
                return count;
            }
    }
    
    return -1;
}
}