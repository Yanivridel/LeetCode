
// 75. Sort Colors
// Given an array nums with n objects colored red,white, or blue,
//  sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color
// red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

var sortColors = function(nums) {
    let end = nums.length -1;
    end = partitionModulo_3(nums, 2, 0, end);
    end = partitionModulo_3(nums, 1, 0, end);
};

function partitionModulo_3(nums, pivot, start, end){
    let i = start;
    let j = end;

    while (i < j) {
        while (nums[i]%3 !== pivot && i < j) i++;
        while (nums[j]%3 === pivot && i < j) j--;
        if (i < j){
            let temp = nums[i];
            nums[i] = nums[j]
            nums[j] = temp;
        }
    }
    return nums[i]%3 === pivot ? i-1:i;
}

// let nums = [2,0,2,1,1,0];
// let nums = [2,0,1];
// let nums = [0,0];
// let nums = [1,0];
let nums = [1,2];
console.log(nums);
sortColors(nums);
console.log(nums);
