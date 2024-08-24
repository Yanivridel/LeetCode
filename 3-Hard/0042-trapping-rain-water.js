

// 42. Trapping Rain Water
// Given n non-negative integers representing an elevation
//  map where the width of each bar is 1,
//   compute how much water it can trap after raining.

var trap = function(height) {
    let i = 0 ,j = height.length - 1, sum = 0;
    let leftMax = height[0], rightMax = height[j];
    while (i < j) {
        if (leftMax <= rightMax) {
            sum += leftMax - height[i++];
            leftMax = Math.max(leftMax, height[i]);
        } else {
            sum += rightMax - height[j--];
            rightMax = Math.max(rightMax, height[j]);
        }
    }
    return sum;
}


// const height = [0,1,0,2,1,0,1,3,2,1,2,1]; // 6
// const height = [4,2,0,3,2,5]; // 9
// const height = [4,2,3]; //1
// const height = [5,4,1,2]; //1
// const height = [9,8,2,6]; //4
// const height = [4,3,3,9,3,0,9,2,8,3] // 23
// const height = [9,6,8,8,5,6,3]; // 3
const height = [0,7,1,4,6]; // 7
console.log(trap(height));



// At least we tried
/*
var trap = function(height) {
    let sum = 0 , min;
    let deepWater, curr, left = 0, right = height.length-1, k;
    while(left < height.length-1 && height[left] < height[left+1]) left++;
    while(right > 0 && height[right] < height[right-1]) right--;

    console.log(height,left,right);
    

    for(let i=left; i <= right; i++){
        min = Infinity
        curr = 0
        deepWater = 0;
        for(let j=i+1; j <= right; j++){
            if(height[i] <= height[j]){
                sum += ((j-i-1) * height[i]) - curr;
                console.log("sum",sum, "i",i,"j",j);
                i=j-1;
                break;
            }
            else {
                if(height[j] < min){
                    min = height[j];
                    flag=true
                }
                let curr2 = 0;
                if(min < height[j] && flag){
                    for(k=j-1; k >= i; k--){
                        curr2 += height[k];
                        if(height[j] < height[k]){
                            break;
                        }
                    }
                    
                    console.log("curr", curr2);
                    console.log(i,j);
                    deepWater += ((j-k-1) * height[j]) - curr2 + height[k];
                    flag=false;
                }
                curr += height[j];
            if(j === right) {
                sum+= deepWater;
                i=j-1;
            }
            console.log("sum",sum, "i",i,"j",j, "deep", deepWater, "min", min);
            }
        }
    }
    return sum;
};

*/