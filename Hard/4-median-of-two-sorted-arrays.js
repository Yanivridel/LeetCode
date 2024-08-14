
// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.
// The overall run time complexity should be O(log(m+n)).


function findMedianSortedArrays(nums1, nums2, n, m){
    let left1 = 0, right1 = nums1.length -1;
    let left2 = 0, right2 = nums2.length -1;
    let mid1,mid2, count=0;

    while(left1<=right1 || left2<=right2 ){
        mid1 = Math.floor((right1-left1)/2 + left1);
        mid2 = Math.floor((right2-left2)/2 + left2);
        
        console.log("left1: ",left1,"right1: ",right1);
        console.log("left2: ",left2,"right2: ",right2);
        console.log("\niteration " +count++, mid1,nums1[mid1],mid2,nums2[mid2]);

        if(mid1 === n-1 && mid2 === 0) break;
        if(nums1[mid1] < nums2[mid2]){
            left1 = mid1!==n-1? mid1 + 1:left1;
            right2 = mid2!==0 ? mid2 :right2;
        }
        else if (nums1[mid1] > nums2[mid2]){
            right1 = mid1!==0 ? mid1 :right1;
            left2 = mid2!==m-1? mid2 + 1:left2;
        }
        else break;
    }
// [1,>2] [>3,4]

    return ((n+m)%2 === 1)?  nums2[mid2]: (nums1[mid1]+nums2[mid2])/2;
}

// console.log(findMedianSortedArrays([1,3],[2],2,1));
// console.log(findMedianSortedArrays([1,2],[3,4],2,2));
// console.log(findMedianSortedArrays([1,2,3,4],[5,6,7,8,9],4,5));
console.log(findMedianSortedArrays([1,4,7,9],[2,3,5,6,8],4,5));


// [1,>4,7,9] [2,3,>5,6,8]  -->  [1,2,3,4,5,6,7,8,9] --> med = 5;
// [1,4,>7,9] [2,>3,5,6,8]

// [1,2,3,4,5] [1,2,3,4,5,6,7,8,9,10] -> [1,1,2,2,3,3,4,4,5,5,6,7,8,9,10]
// [1,2,3,4,5,6,7,8,9,10] [3,6,20,100,200] -> [1,2,3,3,4,5,6,6,7,8,9,10,20,100,200]

// [1,50,100] []

// [1,>2,3,4] [5,6,>7,8,9]  -->  [1,2,3,4,5,6,7,8,9] --> med = 5;
// [1,2,>3,4] [5,>6,7,8,9]
// [1,2,3,>4] [>5,6,7,8,9]