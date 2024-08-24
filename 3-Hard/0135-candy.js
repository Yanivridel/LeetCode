
// 135. Candy
// There are n children standing in a line.
//  Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following 
// requirements:
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have
//  to distribute the candies to the children.

// Version 1 with array
var candy = function(rating) {
    let n = ratings.length;
    let candies = new Array(n).fill(1);
    //Calc peaks
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    //Calc valleys
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }
    //calc sum
    return ans = candies.reduce((sum, val) => sum + val, 0);
}


// Version 2 without array
var candyV2 = function(ratings) {
    const n = ratings.length;
    let totalCandies = n;
    let i = 1;

    while (i < n) {
        if (ratings[i] === ratings[i - 1]) {
            i++;
            continue;
        }

        let currentPeak = 0;
        while (i < n && ratings[i] > ratings[i - 1]) {
            currentPeak++;
            totalCandies += currentPeak;
            i++;
        }

        if (i === n)
            return totalCandies;

        let currentValley = 0;
        while (i < n && ratings[i] < ratings[i - 1]) {
            currentValley++;
            totalCandies += currentValley;
            i++;
        }

        totalCandies -= Math.min(currentPeak, currentValley);
    }
    return totalCandies; 
};

// const ratings = [1,0,2]; // 2-1-2= 5
const ratings = [1,0,2,3,7,3,1,4,6,9]; // 2-1-2-3-4-2-1-2-3-4 = 24
console.log(ratings.toString());

console.log(candy(ratings));
