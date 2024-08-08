
// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.
// The overall run time complexity should be O(log(m+n)).


function findMedianSortedArrays(nums1, nums2){

    return nums1;
}



console.log(findMedianSortedArrays([1,3],[2]));
console.log(findMedianSortedArrays([1,2],[3,4]));
// [1,>4,7,9] [2,3,>5,6,8]  -->  [1,2,3,4,5,6,7,8,9] --> med = 5;

// [1,>2,3,4] [5,6,>7,8,9]  -->  [1,2,3,4,5,6,7,8,9] --> med = 5;

