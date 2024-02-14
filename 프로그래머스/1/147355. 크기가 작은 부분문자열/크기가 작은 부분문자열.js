function solution(t, p) {
    let count = 0;
    for(i=0; i<=t.length-p.length; i++) {
       const part = t.slice(i, i+p.length);
        if(part <= p) {
            count++;
        }
    }
    return count;
}