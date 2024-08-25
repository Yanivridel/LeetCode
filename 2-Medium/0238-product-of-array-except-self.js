
// 238. Product of Array Except Self
// Given an integer array nums, return an array 
// answer such that answer[i] is equal to the 
// product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums 
// is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) 
// time and without using the division operation.

var productExceptSelf = function(nums) {
    const res = [];
    let factor = 1;
    for(let i=0; i < nums.length; i++){
        res.push(factor);
        factor *= nums[i];
    }
    factor = 1;
    for(let i=nums.length-1; i >= 0; i--){
        res[i] *= factor
        factor *= nums[i];
    }
    return res;
};

const nums = [1,2,3,4];
// [24,12,8,6]
console.log(productExceptSelf(nums));