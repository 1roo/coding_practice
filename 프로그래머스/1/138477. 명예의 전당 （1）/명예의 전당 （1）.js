function solution(k, score) {
    let list = [];
    let result = [];
    
    for(let i = 0; i < score.length; i++) {
        list.push(score[i]);
        if(list.length > k) {
            let min = Math.min(...list);
            let index = list.indexOf(min);
            list.splice(index, 1);
        }
        result.push(Math.min(...list));
    }
    
    return result;
}