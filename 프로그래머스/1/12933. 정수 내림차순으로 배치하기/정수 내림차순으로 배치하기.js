function solution(n) {
    let nums = String(n).split('');
    let answer = [];
    for(let i=0; i<nums.length; i++) {
        answer[i] = parseInt(nums[nums.length - 1 - i]);
    }
    answer.sort((a,b) => b-a);
    return Number(answer.join(''));
}