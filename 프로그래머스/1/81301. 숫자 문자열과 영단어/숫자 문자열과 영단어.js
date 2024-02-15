function solution(s) {
    const numbers = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    
    let result='';
    let word='';
    for(i=0; i<s.length; i++) {
        let num = s[i];
        
        if(num <= 9 && num >= 0) {
            result += num;
        } else {
            word += num;
            
            if(numbers[word] !== undefined) {
                result += numbers[word];
                word = '';
            }
        }
    }
    return parseInt(result);
}