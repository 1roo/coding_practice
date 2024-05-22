function solution(nums) {
let numsHash = new Map()
for(const x of nums){
numsHash.set(x, (numsHash.get(x) || 0) + 1)
}
return nums.length / 2 >= numsHash.size ? numsHash.size : nums.length / 2
}