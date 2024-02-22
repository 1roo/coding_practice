function solution(numbers) {
    let mySet = new Set();
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i !== j) {
                mySet.add(numbers[i]+numbers[j]);
            }
        }
    }
    let newArray = Array.from(mySet);
    newArray.sort((a, b) => a - b);
    
    return newArray;
}