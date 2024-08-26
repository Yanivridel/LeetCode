
// 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, 
// return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

var longestConsecutive = function(nums) {
    const uf = new UnionFind();
    let max = 0;
    for(let i=0; i < nums.length; i++){
        uf.makeSet(nums[i]);
        if(uf.parent.has(nums[i]-1))
            uf.union(nums[i]-1,nums[i]);
        if (uf.parent.has(nums[i]+1))
            uf.union(nums[i],nums[i]+1);
        max = Math.max(max, uf.size.get(uf.find(nums[i])))
    }
    return max;
};

class UnionFind {
    constructor() {
        this.parent = new Map(); // Maps an element to its parent
        this.rank = new Map();   // Maps an element to its rank
        this.size = new Map();
    }

    makeSet(x) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x); // Each element is its own parent initially
            this.rank.set(x, 0);   // The rank of each element is 0 initially
            this.size.set(x,1);
        }
    }

    find(x) {
        if (this.parent.get(x) !== x) {
            this.parent.set(x, this.find(this.parent.get(x)));
        }
        return this.parent.get(x);
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX !== rootY) {
            // Union by rank: attach the smaller tree under the larger tree
            let rankX = this.rank.get(rootX);
            let rankY = this.rank.get(rootY);

            if (rankX > rankY) {
                this.parent.set(rootY, rootX);
                this.size.set(rootX, this.size.get(rootX) + this.size.get(rootY))
            } else if (rankX < rankY) {
                this.parent.set(rootX, rootY);
                this.size.set(rootY, this.size.get(rootX) + this.size.get(rootY))
            } else {
                this.parent.set(rootY, rootX);
                this.rank.set(rootX, rankX + 1); // Increase the rank of the new root
                this.size.set(rootX, this.size.get(rootX) + this.size.get(rootY))
            }
        }
    }

    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}


// const nums = [100,4,200,1,3,2];
const nums = [0,3,7,2,5,8,4,6,0,1];

console.log(longestConsecutive(nums));

