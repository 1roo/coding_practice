function solution(k, m, score) {
    let arr = [];
    let result = 0;
    score.sort((a, b) => b - a);

    for(let i = 0; i < score.length; i += m) {
        arr.push(score.slice(i, i+m));
    }
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length === m) {
            let min = arr[i][m-1];
            result += m * min;
        }
    }
    
    return result;
}