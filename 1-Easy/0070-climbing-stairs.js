
// 70. Climbing Stairs
// You are climbing a staircase.
// It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?


// Dynamic Programming
var climbStairs = function(n) {
    let res0 = 1, res1 = 1 , res2;
    let count = 2;
    while(count++ <= n){
        res2 = res1 + res0;
        res0 = res1
        res1 = res2;
    }
    return res1;
};


//Recursion
function climbStairsRec(n){
    if(n === 1 || n === 0) return 1;
    else return climbStairsRec(n-1) + climbStairsRec(n-2);
}


console.log(climbStairs(1));
