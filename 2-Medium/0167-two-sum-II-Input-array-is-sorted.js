
// 167. Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already
// sorted in non-decreasing order, find two numbers such that
// they add up to a specific target number. Let these two numbers
// be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2,
// added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution.
// You may not use the same element twice.

// Your solution must use only constant extra space.

var twoSum = function(numbers, target) {
    let i = 0, j = numbers.length - 1;
    while(i < j){
        const sum = numbers[i] + numbers[j];
        if(sum > target) j--;
        else if(sum < target) i++
        else return [i+1,j+1];
    }
    return -1;
};

const numbers = [2,7,11,15]; // output = [1,2] => (2 + 7 = 9)
const target = 9;
console.log(twoSum(numbers,target).toString());
