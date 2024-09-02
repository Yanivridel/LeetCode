
// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, 
// return the index if the target is found. If not, return the 
// index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1, mid;
    while(left <= right){
        mid = Math.floor((right-left)/2) + left;
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) left = mid+1;
        else right = mid-1;
    }
    return nums[mid] < target ? mid+1 : mid;
};

const nums = [1,3,5,6], target = 5;
console.log(searchInsert(nums,target));
