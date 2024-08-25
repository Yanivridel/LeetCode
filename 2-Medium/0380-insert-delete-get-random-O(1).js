
// 380. Insert Delete GetRandom O(1)
// Implement the RandomizedSet class:
// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. 
// Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. 
// Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements 
// (it's guaranteed that at least one element exists when this method is
//      called). Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function
//  works in average O(1) time complexity.

var RandomizedSet = function() {
    this.hashMap = new Map();
};

RandomizedSet.prototype.insert = function(val) {
    if(this.hashMap.has(val)) return false;
    this.hashMap.set(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if(!this.hashMap.has(val)) return false;
    this.hashMap.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.hashMap.size);
    return Array.from(this.hashMap.keys())[randomIndex];
};


const actions = ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"];
const vals = [[], [1], [2], [2], [], [1], [2], []];


let obj = new RandomizedSet();
for(let i=1; i< actions.length; i++){
    if(actions[i] === 'insert')
        console.log(obj.insert(vals[i][0]));
    if(actions[i] === 'remove')
        console.log(obj.remove(vals[i][0]));
    if(actions[i] === 'getRandom')
        console.log(obj.getRandom(vals[i][0]));
}
