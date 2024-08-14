
// 189. Rotate Array
// Given an integer array nums,
// rotate the array to the right by k steps,
// where k is non-negative.

var rotate = function(nums, k) {
    k = k% nums.length;
    let arr = nums.splice(-k);
    nums.unshift(...arr);
};

let nums = [1,2,3,4,5,6,7];
let k =3;
console.log(nums.toString());
rotate(nums, k);
console.log(nums.toString());

