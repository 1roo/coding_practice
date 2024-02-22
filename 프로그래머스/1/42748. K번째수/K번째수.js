function solution(array, commands) {
    const answer = [];
    for(let i = 0; i < commands.length; i++) {
        let arr1;
        if(commands[i][0]===commands[i][1]) {
            arr1 = array[commands[i][0]-1];
            answer.push(arr1);
        } else {
            arr1 = array.slice(commands[i][0]-1, commands[i][1]);
            arr1.sort((a, b) => a - b);
            answer.push(arr1[commands[i][2]-1]);
        }

    }
        
    return answer;
}