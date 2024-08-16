
// 88. Merge Sorted Array
// You are given two integer arrays nums1 and nums2,
//  sorted in non-decreasing order,
// and two integers m and n,
// representing the number of elements
// in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array
// sorted in non-decreasing order.

// The final sorted array should not be returned by the function,
//  but instead be stored inside the array nums1. To accommodate this,
// nums1 has a length of m + n, where the first m elements denote the
// elements that should be merged, 
// and the last n elements are set to 0 and should be ignored.
//  nums2 has a length of n.

var merge = function(nums1, m, nums2, n) {
    const res = [];
    let i=0,j=0;
    while(i<m && j<n){
        if(nums1[i] < nums2[j])
            res.push(nums1[i++]);
        else
            res.push(nums2[j++]);
    }
    while(i<m) res.push(nums1[i++]);
    while(j<n) res.push(nums2[j++]);
    for(i=0;i<n+m;i++)
        nums1[i] = res[i];
};


const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1,m,nums2,n), nums1);
