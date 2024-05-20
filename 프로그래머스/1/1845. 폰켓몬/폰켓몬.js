function solution(nums) {
   let unduplicated = new Set(nums);

   if(unduplicated.size >= nums.length/2) {
    return nums.length/2;
   } else {
    return unduplicated.size;
   }
}
