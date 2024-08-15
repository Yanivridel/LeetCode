
// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.
// The overall run time complexity should be O(log(m+n)).


function findMedianSortedArrays(nums1, nums2){
    const m = nums1.length;
    const n = nums2.length;
    if(m > n)
        return findMedianSortedArrays(nums2,nums1);

    let left = 0, right = m;

    while(left<=right){
        const mid1 = Math.floor((right+left)/2);
        const mid2 = Math.floor((n+m+1)/2) - mid1;
        console.log("mid1:", mid1,"\nnums1:",nums1[mid1], "\nmid2:", mid2,"\nnums2:", nums2[mid2]);
        
        const max1 = (mid1 === 0) ? -Infinity : nums1[mid1 - 1];
        const max2 = (mid2 === 0) ? -Infinity : nums2[mid2 - 1];

        const min1 = (mid1 === m) ? Infinity : nums1[mid1];
        const min2 = (mid2 === n) ? Infinity : nums2[mid2];

        console.log("min1:", min1, "max1:", max1,"\nmin2:", min2, "max2:", max2);
        
        if (max1 <= min2 && max2 <= min1){
            if ((m + n) % 2 === 0)
                return (Math.max(max1, max2) + Math.min(min1, min2)) / 2;
            else
                return Math.max(max1, max2);
        }
        else if (max1 > min2)
            right = mid1 - 1;
        else // maxY > minX
            left = mid1 + 1;
    }
}
// console.log(findMedianSortedArrays([1,3],[2]));
// console.log(findMedianSortedArrays([1,2],[3,4]));
console.log(findMedianSortedArrays([1,2,3,4],[5,6,7,8,9]));
// console.log(findMedianSortedArrays([1,4,7,9],[2,3,5,6,8]));
// console.log(findMedianSortedArrays([1,7,9,10,25,43,78],[2,7,7,34,43,53,62,81]));


// [1,>4,7,9] , [2,3,>5,6,8]  -->  [1,2,3,4,5,6,7,8,9] --> med = 5;

// [1,2,3,4,5] , [1,2,3,4,5,6,7,8,9,10] -> [1,1,2,2,3,3,4,4,5,5,6,7,8,9,10]

// [1,2,3,4,5,6,7,8,9,10] , [3,6,20,100,200] -> [1,2,3,3,4,5,6,6,7,8,9,10,20,100,200]

// [1,>2,3,4] , [5,6,>7,8,9]  -->  [1,2,3,4,5,6,7,8,9] --> med = 5;
