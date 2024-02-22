function solution(food) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < food.length; i++) {
        const count = food[i] % 2 !== 0 ? (food[i] - 1) / 2 : food[i] / 2;
        for (let j = 0; j < count; j++) {
            arr1.push(i);
        }
    }
    
    arr1.push(0);
    for(let j = arr1.length -2; j >= 0; j--) {
        arr2.push(arr1[j]);
    }
    
    const answer = [...arr1, ...arr2];
    
    return answer.join("");
}