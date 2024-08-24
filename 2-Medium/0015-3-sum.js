
// 15. 3Sum
// Given an integer array nums, return all the triplets
//  [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
//  and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// 97% runtime 99% memory
var threeSum = function(nums) {
    const sorted = nums.sort((a,b) => a-b);
    const res = [];    
    for(let i=0; i< sorted.length; i++){
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
        twoSum(res, sorted, i+1, sorted.length - 1, -sorted[i]);
    }
    return res;
};

function twoSum(res, sorted, left, right, target) {
    while(left < right){
        const sum = sorted[left] + sorted[right];
        if(sum > target) right--;
        else if(sum < target) left++
        else  {
            res.push([-target, sorted[left], sorted[right]]);
            while (left < right && sorted[left] === sorted[left + 1]) left++;
            while (left < right && sorted[right] === sorted[right - 1]) right--;
            left++;
            right--;
        }
    }
};


// const nums = [-1,0,1,2,-1,-4]; // Output: [[-1,-1,2],[-1,0,1]]
// const nums = [0,0,0,0]; // [0,0,0]
const nums = [-2,0,1,1,2]; // [[-2,0,2],[-2,1,1]]
console.log(threeSum(nums));


// Bad runtime 
/*
var threeSum = function(nums) {
    const sorted = nums.slice().sort((a,b) => a-b);
    const res = [];    
    for(let i=0; i< sorted.length; i++){
        const temp = twoSum(sorted.slice(i+1), -sorted[i]);
        for(let j=0; j < temp.length; j++){
            if(!arrayExists(res,[sorted[i], ...temp[j]]))
                res.push([sorted[i], ...temp[j]]);
        }
    }
    return res;
};

function twoSum(numbers, target) {
    let i = 0, j = numbers.length - 1;
    const res = [];
    while(i < j){
        const sum = numbers[i] + numbers[j];
        if(sum > target) j--;
        else if(sum < target) i++
        else res.push([numbers[i++],numbers[j--]]);
    }
    return res;
};

function arrayExists(arr, targetArray) {
    return arr.some(subArray => 
        Array.isArray(subArray) &&
        subArray.length === targetArray.length &&
        subArray.every((value, index) => value === targetArray[index])
    );
}

*/