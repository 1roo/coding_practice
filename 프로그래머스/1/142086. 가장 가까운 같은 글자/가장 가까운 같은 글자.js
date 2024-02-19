function solution(s) {
    let answer = Array(s.length).fill(-1);
    let nums = {};
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] in nums){
           answer[i] = i - nums[s[i]];
        }
        nums[s[i]] = i;
    }
    
    
    return answer;
}