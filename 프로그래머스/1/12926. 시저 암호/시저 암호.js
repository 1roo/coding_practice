function solution(s, n) {
    let ascii = [];
    let char = [];
    for(i=0; i<s.length; i++) {
        ascii[i] = s[i].charCodeAt(0);
        if(ascii[i] !== 32) {
            if(ascii[i] <= 90 && ascii[i] + n > 90) {
                ascii[i] = ascii[i]+n - 90 + 64;
            } else if(ascii[i] + n > 122) {
                ascii[i] = ascii[i]+n - 122 + 96;
            } else {
                ascii[i] = ascii[i]+n;
            }
         } else {
             ascii[i] = 32;
         }
        char[i] = String.fromCharCode(ascii[i]);
    }
    return char.join('');

}