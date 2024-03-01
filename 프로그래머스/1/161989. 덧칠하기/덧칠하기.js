function solution(n, m, section) {
    let count = 0;
    let painted = 0;
    
    section.forEach((s) => {
        if(s>painted) {
            painted = s+m-1;
            count++;
        }
    })
    
    return count;

}