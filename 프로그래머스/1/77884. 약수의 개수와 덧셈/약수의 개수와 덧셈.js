function solution(left, right) {
    let arr = [];
    let answer = 0;
    for(let i = left; i <= right; i++) {
            arr=[];
        for(let j=1; j<=i; j++) {
            if(i%j === 0) {
                
                arr.push(j);
            } 
        }
        if(arr.length % 2 == 0) {
                    answer += i;
                } else {
                    answer -= i;
                }

    }

    return answer;
}