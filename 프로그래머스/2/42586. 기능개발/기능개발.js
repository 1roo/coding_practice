function solution(progresses, speeds) {
    let times = [];
    let left = [];
    for(let i = 0; i < progresses.length; i++) {
        times.push(100-progresses[i]);
        left.push(Math.ceil(times[i] / speeds[i]));
    }
    let result = [];
    let count = 1;
    
    let maxTime = left[0];

    for (let i = 1; i < left.length; i++) {
        if (left[i] <= maxTime) {
            count++;
        } else {
            result.push(count);
            count = 1;
            maxTime = left[i];
        }
    }
    result.push(count);
    return result;
}