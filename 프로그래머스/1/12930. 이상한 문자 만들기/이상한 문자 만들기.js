function solution(s) {
    const words = s.split(' ');
    let arr = [];
    for (let word of words) {
        let newWord = '';
        
        for(i=0; i<word.length; i++) {
            if(i%2 ===0) {
                newWord += word[i].toUpperCase();
            } else {
                newWord += word[i].toLowerCase();
            }
        }
        

        arr.push(newWord);
    }
    
    return arr.join(' ');
}