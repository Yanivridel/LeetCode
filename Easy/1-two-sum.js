
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
let res = twoSum(arr,num);
console.log(`Search: ${num}\nArr: ${arr}`);
console.log(`Result = ${res}`);

function twoSum(nums, target) {
    let sol = [];
    let i=0, j=nums.length-1;
    let numsSorted = (nums.slice()).sort(function(a, b){return a - b});
    while(i<j){
        let sum = numsSorted[i] + numsSorted[j];
        if(sum > target) j--;
        else if (sum < target) i++
        else {
            sol.push(numsSorted[i],numsSorted[j]); 
            break;
        }
    }
    if(sol.length !== 0){
        sol[0] = searchInArray(nums,sol[0],0);
        sol[1] = searchInArray(nums,sol[1],1);
    }
    return sol
};
function searchInArray(arr, x, reverse) {
    if(reverse){
        for(let i=0;i<arr.length;i++){
            if(arr[i]===x) return i;
        }
    }
    else{
        for(let i=arr.length-1;i>=0;i--){
            if(arr[i]===x) return i;
        }
    }
    return -1;
}