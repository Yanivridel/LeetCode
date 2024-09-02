
// 162. Find Peak Element
// A peak element is an element that is strictly greater 
// than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, 
// and return its index. If the array contains multiple peaks,
// return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, 
// an element is always considered to be strictly greater than
//  a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

var findPeakElement = function(nums) {
    if(nums.length === 1) return 0;
    let left = 0, right = nums.length -1, mid;
    while(left <= right){
        const mid = Math.floor((right-left)/2) + left;
        if(isPeak(nums, mid)) return mid;
        else if(mid !== nums.length -1 && nums[mid] < nums[mid+1]) left = mid+1;
        else right = mid-1;
    }
    return -1;
};

function isPeak(nums, i){
    if(i === 0)
        return nums[i] > nums[i+1];
    if(i === nums.length-1)
        return nums[i] > nums[i-1];
    return nums[i-1] < nums[i] && nums[i] > nums[i+1];
}

// const nums = [1,2,3,1];
const nums = [1,2];
console.log(findPeakElement(nums));
