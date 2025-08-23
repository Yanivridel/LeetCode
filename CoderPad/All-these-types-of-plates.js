/*
All these types of plates
You invited your family for the greatest of all dinners, and everyone enjoyed it.

You are now doing the washing-up. Your cousin is cleaning some plates 
and then giving them to you. You put them in your giant pile of various plates.

The pile is arranged so that every plate of the same type is grouped. 
There is no specific order between the plate groups.

Your cousin gives you one or two plates at a time. When there are two plates, 
and when they belong to two different groups, it’s always two neighboring groups. 
Your cousin never gives you plates from unknown groups. But the two plates are not 
necessarily in the same order as in the pile.

This washing-up has to be finished fast. So, each time your cousin gives you some plates, 
you want to insert them in the pile in only one action.

The pile can be very high (thousands of plates, you have a big family!), 
so browsing through the whole stack at each insertion can be too long.

Keep in mind that the pile changes while you add plates to it!

Example
Let’s say you begin with this pile of plates:

flower-decorated plate
light green plate
light green plate
big blue plate
big blue plate
The “flower-decorated plate” is at the index 0.

Your cousin gives you two “light green plates”. They can be inserted at indexes 1, 2, or 3. When multiple indexes are allowed, you must answer the lowest one. You must also answer a boolean to tell if the two plates must be reversed before insertion.

Then, your cousin gives you a “big blue plate” and a “light green plate”. They must be inserted at the transition between the two groups. It was previously at index 3, but because of the previous insertion, the correct index is now 5. The boolean must be True, because the group of light green plates is before the group of big blue plates.

Happy washing-up!

*/

// Solution:

class PlateStack {
    constructor(initialPile) {
      this.pile = [...initialPile];
      this.groups = [];
      // Map for quickly finding groups by plate type: O(1) lookup
      this.typeToGroupIndex = new Map();
      // Map for tracking neighboring groups: O(1) lookup for pairs
      this.neighborPairs = new Map();
      
      this.buildGroups();
    }
  
    buildGroups() {
      this.groups = [];
      this.typeToGroupIndex.clear();
      this.neighborPairs.clear();
      
      if (this.pile.length === 0) return;
      
      let start = 0;
      for (let i = 1; i < this.pile.length; i++) {
        if (this.pile[i] !== this.pile[i - 1]) {
          this.groups.push({ 
            type: this.pile[i - 1], 
            start, 
            end: i - 1 
          });
          start = i;
        }
      }
      
      // Add the last group
      this.groups.push({ 
        type: this.pile[this.pile.length - 1], 
        start, 
        end: this.pile.length - 1 
      });
      
      // Build the type to group index map - O(1) lookup by type
      for (let i = 0; i < this.groups.length; i++) {
        this.typeToGroupIndex.set(this.groups[i].type, i);
      }
      
      // Build the neighbor pairs map - O(1) lookup for pairs
      for (let i = 0; i < this.groups.length - 1; i++) {
        const type1 = this.groups[i].type;
        const type2 = this.groups[i + 1].type;
        
        // Store both orientations for O(1) lookup
        this.neighborPairs.set(`${type1},${type2}`, { 
          index: this.groups[i + 1].start, 
          reversed: false 
        });
        
        this.neighborPairs.set(`${type2},${type1}`, { 
          index: this.groups[i + 1].start, 
          reversed: true 
        });
      }
      
      console.log("Groups:", this.groups);
    }
  
    insert(plates) {
      if (!Array.isArray(plates) || plates.length === 0 || plates.length > 2) {
        throw new Error("Invalid plates input. Must be array of 1 or 2 plates.");
      }
      
      let insertIndex, reversed;
      
      if (plates.length === 1) {
        [insertIndex, reversed] = this.calculateSingleInsertPosition(plates[0]);
        this.pile.splice(insertIndex, 0, plates[0]);
      } else {
        [insertIndex, reversed] = this.calculatePairInsertPosition(plates[0], plates[1]);
        const platesToInsert = reversed ? [plates[1], plates[0]] : [plates[0], plates[1]]; 
        this.pile.splice(insertIndex, 0, ...platesToInsert);
      }
      
      // After insertion, rebuild groups to handle any merges or new structures
      this.buildGroups();
      
      return [insertIndex, reversed]; // Return for testing/validation
    }
  
    calculateSingleInsertPosition(plate) {
      // Check if plate type already exists
      const groupIndex = this.typeToGroupIndex.get(plate);
      
      if (groupIndex !== undefined) {
        // Return position after the end of the existing group
        return [this.groups[groupIndex].end + 1, false];
      } else {
        // New plate type - add to the end of the pile
        return [this.pile.length, false];
      }
    }
  
    calculatePairInsertPosition(plate1, plate2) {
      // Case 1: Both plates are the same type
      if (plate1 === plate2) {
        const groupIndex = this.typeToGroupIndex.get(plate1);
        
        if (groupIndex !== undefined) {
          // Insert after existing group of same type
          return [this.groups[groupIndex].end + 1, false];
        } else {
          // New plate type - add to the end
          return [this.pile.length, false];
        }
      }
      
      // Case 2: Check if this is a known neighboring pair
      const pairKey = `${plate1},${plate2}`;
      const position = this.neighborPairs.get(pairKey);
      
      if (position) {
        return [position.index, position.reversed];
      }
      
      // Case 3: One or both plate types are new
      const hasPlate1 = this.typeToGroupIndex.has(plate1);
      const hasPlate2 = this.typeToGroupIndex.has(plate2);
      
      if (!hasPlate1 && !hasPlate2) {
        // Both are new types - add to the end
        return [this.pile.length, false];
      } else if (hasPlate1 && !hasPlate2) {
        // plate1 exists but plate2 is new - add after plate1's group
        const group1 = this.groups[this.typeToGroupIndex.get(plate1)];
        return [group1.end + 1, false];
      } else if (!hasPlate1 && hasPlate2) {
        // plate2 exists but plate1 is new - add before plate2's group
        const group2 = this.groups[this.typeToGroupIndex.get(plate2)];
        return [group2.start, false];
      }
      
      // If we get here, both types exist but they're not neighbors
      // According to the problem, this shouldn't happen, but handle it anyway
      throw new Error("Plates are from non-neighboring groups");
    }
  }
  
  // TESTING
  console.log("=== Test Case 1 ===");
  const pile = ['flower', 'green', 'green', 'blue', 'blue'];
  const stack = new PlateStack(pile);
  
  // Step 1
  let [index1, rev1] = stack.insert(['green', 'green']);
  console.log('Insert 1:', index1, rev1);  // Expected: 3 false
  console.log('Pile after insert 1:', stack.pile);
  
  // Step 2
  let [index2, rev2] = stack.insert(['blue', 'green']);
  console.log('Insert 2:', index2, rev2);  // Expected: 7 true
  console.log('Pile after insert 2:', stack.pile);
  
  // Step 3 - Test adding a new color
  console.log('\n=== Test Case 2: New Color ===');
  let [index3, rev3] = stack.insert(['purple']);
  console.log('Insert 3 (new color):', index3, rev3);
  console.log('Final Pile:', stack.pile);