
// 169. Majority Element
// Given an array nums of size n,
// return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.


var majorityElement = function(nums) {
    let count = 1;
    let maxNum = nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i] != maxNum){
            if(count === 1) maxNum = nums[i];
            else count--;
        }
        else count++;
    }
    return maxNum;
};


let nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));
