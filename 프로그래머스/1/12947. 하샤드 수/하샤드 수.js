function solution(x) {
    let nums = String(x).split('');
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum += parseInt(nums[i])
    }
    if(x % sum === 0) {
        return true;
    }
    return false;
}