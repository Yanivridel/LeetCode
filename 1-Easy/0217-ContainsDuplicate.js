// Given an integer array nums, return true if any value appears at least twice 
// in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};