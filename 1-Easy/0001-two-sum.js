
// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

let num = 28;
let arr = [2,6,54,90,56,23,67,9,21,45,89,5,3];
let res = twoSumHashMap(arr,num);
console.log(`Search: ${num}\nArr: ${arr}`);
console.log(`Result = ${res}`);

// TWO POINTER SOLUTION
function twoSum2Pointers(nums, target) {
    let i=0, j=nums.length-1;
    let sorted = nums.slice().sort((a, b) => a - b);
    while(i<j){
        const sum = sorted[i] + sorted[j];
        if(sum === target) 
            return [nums.indexOf(sorted[i]), nums.lastIndexOf(sorted[j])]
        else if (sum > target) j--;
        else i++
    }
    return -1;
};

// HASH MAP SOLUTION
function twoSumHashMap(nums, target) {
    const hashMap = new Map();
    for(let i= 0 ; i < nums.length; i++){
        const diff = target - nums[i];
        if(hashMap.has(diff)) return [i, hashMap.get(diff)];
        hashMap.set(nums[i],i);
    }
}