function solution(strings, n) {
    var answer = [];
    for (let i=0; i<strings.length; i++) {
        answer[i] = strings[i][n] + strings[i];
    }
    answer.sort();

    let realAnswer = answer.map(item => item.substring(1));

    return realAnswer;
}