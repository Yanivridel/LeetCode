
// 381. Insert Delete GetRandom O(1) - Duplicates allowed
// RandomizedCollection is a data structure that contains a collectio
//  of numbers, possibly duplicates (i.e., a multiset).
//   It should support inserting and removing specific elements
//    and also reporting a random element.

// Implement the RandomizedCollection class:
// RandomizedCollection() Initializes the empty RandomizedCollection object.
// bool insert(int val) Inserts an item val into the multiset, even if the
//  item is already present. Returns true if the item is not present, 
//  false otherwise.
// bool remove(int val) Removes an item val from the multiset if present.
//  Returns true if the item is present, false otherwise. Note that if
//   val has multiple occurrences in the multiset, we only remove one of them.
// int getRandom() Returns a random element from the current multiset of 
// elements. The probability of each element being returned is linearly 
// related to the number of the same values the multiset contains.
// You must implement the functions of the class such that each function
// works on average O(1) time complexity.

// Note: The test cases are generated such that getRandom will only be 
// called if there is at least one item in the RandomizedCollection.

var RandomizedSet = function() {
    this.hashMap = new Map();
    this.values = [];
};

RandomizedSet.prototype.insert = function(val) {
    const flag = !this.hashMap.has(val);
    this.values.push(val);

    if (flag) this.hashMap.set(val, []);
    this.hashMap.get(val).push(this.values.length -1);

    return flag;
};

RandomizedSet.prototype.remove = function(val) {
    if(!this.hashMap.has(val)) return false;
    const currArr = this.hashMap.get(val);
    const index = currArr[currArr.length-1];

    const lastElement = this.values[this.values.length - 1];
    this.values[index] = lastElement;
    this.values.pop();

    if (index !== this.values.length) { // Only update if we did a swap
        const lastArr = this.hashMap.get(lastElement);
        for (let i = 0; i < lastArr.length; i++) {
            if (lastArr[i] === this.values.length) {
                lastArr[i] = index;
                break;
            }
        }
    }

    if(currArr.length > 1) currArr.pop();
    else this.hashMap.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.values.length);
    return this.values[randomIndex];
};


// const actions = ["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"];
// const vals = [[], [1], [1], [2], [], [1], []];

// const actions =["RandomizedCollection","insert","insert","insert",
//                 "insert","insert","remove","remove","remove","remove"];
// const vals = [[],[4],[3],[4],[2],[4],[4],[3],[4],[4]];
// [null,true,true,false,true,false,true,true,true,true]

// const actions = ["RandomizedCollection","insert","insert","insert","insert",
//     "insert","insert","remove","remove","remove","remove","remove","insert",
//     "remove","remove","getRandom","getRandom","getRandom","getRandom",
//     "getRandom","getRandom","getRandom","getRandom","getRandom","getRandom"];
// const vals = [[],[10],[10],[20],[20],[30],[30],[10],[20],
// [20],[10],[30],[40],[30],[30],[],[],[],[],[],[],[],[],[],[]];
    // [null,true,false,true,false,true,false,true,true,true,
// true,true,true,true,false,40,40,40,40,40,40,40,40,40,40]

const actions = ["RandomizedCollection","insert","insert","insert","insert","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom","getRandom"];
const vals = [[],[1],[10],[10],[100],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

let obj = new RandomizedSet();
for(let i=1; i< actions.length; i++){
    console.log(actions[i], i, "val:", vals[i]);
    if(actions[i] === 'insert')
        console.log(obj.insert(vals[i][0]));
    if(actions[i] === 'remove')
        console.log(obj.remove(vals[i][0]));
    if(actions[i] === 'getRandom')
        console.log(obj.getRandom());

}
