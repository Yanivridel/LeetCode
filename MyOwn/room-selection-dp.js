// * image i have an array of rooms, and each room has id, max_guests 
// *(tells how much people it can store) and allow_baby (boolean if it aloows babies)
// * and now you get paramater -> number of guests, number of wanted rooms and 
// * a boolean saying if they have baby or not (not calc insite the number  of guests)
// * now out of this information, you should build an algorithm to get the 
// * most acuurate combination of room (by rooms Id) that can store our guests.
// * if the paramater wanted a baby it means that at least 1 of the rooms in the 
// * solution should allow baby, how would you do it ? explain the algorithm, 
// * show me time complexity and the lowest possible time complexity

/* With Count */
function findBestRoomCombinationDP(rooms, targetGuests, targetRooms, needsBaby) {
    const n = rooms.length;
    
    // State: [roomIndex][currentGuests][roomsUsed][hasBabyRoom][roomCountsUsed]
    // Value: [minWastedSpace, previousState]
    const dp = new Map();
    
    // Create a map to track how many times each room is used
    const roomUsageCounts = new Map();
    
    function getKey(index, guests, usedRooms, hasBaby, roomCountsStr) {
        return `${index},${guests},${usedRooms},${hasBaby},${roomCountsStr}`;
    }
    
    function solve(index, currentGuests, usedRooms, hasBaby, roomCounts) {
        // Base cases
        // If used all rooms -> if all good return the spent space , [] else return infinity (bad solution)
        if (usedRooms === targetRooms) {
            if (currentGuests >= targetGuests && (!needsBaby || hasBaby)) {
                return [currentGuests - targetGuests, []];
            }
            return [Infinity, []];
        }
        // If reached the end or used too many rooms
        if (index === n || usedRooms > targetRooms) {
            return [Infinity, []];
        }
        
        // Convert roomCounts to string for the key
        const roomCountsStr = JSON.stringify([...roomCounts]);
        const key = getKey(index, currentGuests, usedRooms, hasBaby, roomCountsStr);
        if (dp.has(key)) {
            return dp.get(key);
        }
        
        const room = rooms[index];
        const currentRoomCount = roomCounts.get(room.id) || 0;
        
        // Don't use current room
        const [skipWaste, skipRooms] = solve(
            index + 1, 
            currentGuests, 
            usedRooms, 
            hasBaby, 
            new Map(roomCounts)
        );
        
        let useWaste = Infinity;
        let useRooms = [];
        
        // Use current room if we haven't exceeded its count
        if (currentRoomCount < room.count) {
            const newRoomCounts = new Map(roomCounts);
            newRoomCounts.set(room.id, currentRoomCount + 1);
            
            const newGuests = currentGuests + room.max_guests;
            const newBaby = hasBaby || room.allow_baby;
            
            [useWaste, useRooms] = solve(
                index,  // Stay at same index since we might use this room again
                newGuests,
                usedRooms + 1,
                newBaby,
                newRoomCounts
            );
            
            if (useWaste !== Infinity) {
                useRooms = [room.id, ...useRooms];
            }
        }
        
        // Choose better option
        let result;
        if (useWaste < skipWaste) {
            result = [useWaste, useRooms];
        } else {
            result = [skipWaste, skipRooms];
        }
        
        dp.set(key, result);
        return result;
    }
    
    const [waste, selectedRooms] = solve(0, 0, 0, false, new Map());
    
    if (waste === Infinity || selectedRooms.length !== targetRooms) {
        return null;
    }
    
    return selectedRooms;
}

// Test the function with rooms that have counts
const rooms = [
    { id: 1, max_guests: 4, allow_baby: false, count: 10 },
    { id: 2, max_guests: 3, allow_baby: true, count: 1 },
    // { id: 3, max_guests: 5, allow_baby: false, count: 1 },
    // { id: 4, max_guests: 4, allow_baby: true, count: 2 },
    // { id: 5, max_guests: 2, allow_baby: false, count: 1 }
];

// Test cases
// console.log(findBestRoomCombinationDP(rooms, 6, 3, true));
// console.log(findBestRoomCombinationDP(rooms, 8, 3, true));
console.log(findBestRoomCombinationDP(rooms, 4, 2, false));



/* No Count On Rooms
// Complexity best: nlogn  / worst :  n ^ numRooms
function findBestRoomCombination(rooms, guests, numRooms, hasBaby) {
    // Sort rooms descending by max_guests to prioritize large rooms
    rooms.sort((a, b) => b.max_guests - a.max_guests);

    let bestCombination = null;
    let minWastedSpace = Infinity;

    function backtrack(index, selectedRooms, totalGuests, hasBabyRoom) {
        // Base case: if we have chosen the required number of rooms
        if (selectedRooms.length === numRooms) {
            if (totalGuests >= guests && (!hasBaby || hasBabyRoom)) {
                let wastedSpace = totalGuests - guests;
                if (wastedSpace < minWastedSpace) {
                    minWastedSpace = wastedSpace;
                    bestCombination = [...selectedRooms];
                }
            }
            return;
        }

        // If we've exhausted all rooms, return
        if (index >= rooms.length) return;

        let room = rooms[index];

        // Option 1: Include this room
        selectedRooms.push(room.id);
        backtrack(
            index + 1,
            selectedRooms,
            totalGuests + room.max_guests,
            hasBabyRoom || room.allow_baby
        );
        selectedRooms.pop();

        // Option 2: Skip this room
        backtrack(index + 1, selectedRooms, totalGuests, hasBabyRoom);
    }

    backtrack(0, [], 0, false);
    return bestCombination;
}

function findBestRoomCombinationDP(rooms, targetGuests, targetRooms, needsBaby) {
    const n = rooms.length;
    
    // State: [roomIndex][currentGuests][roomsUsed][hasBabyRoom]
    // Value: [minWastedSpace, previousState]
    const dp = new Map();
    
    function getKey(index, guests, usedRooms, hasBaby) {
        return `${index},${guests},${usedRooms},${hasBaby}`;
    }
    
    function solve(index, currentGuests, usedRooms, hasBaby) {
        // Base cases
        if (usedRooms === targetRooms) {
            if (currentGuests >= targetGuests && (!needsBaby || hasBaby)) {
                return [currentGuests - targetGuests, []];
            }
            return [Infinity, []];
        }
        
        if (index === n || usedRooms > targetRooms) {
            return [Infinity, []];
        }
        
        const key = getKey(index, currentGuests, usedRooms, hasBaby);
        if (dp.has(key)) {
            return dp.get(key);
        }
        
        // Don't use current room
        const [skipWaste, skipRooms] = solve(index + 1, currentGuests, usedRooms, hasBaby);
        
        // Use current room
        const room = rooms[index];
        const newGuests = currentGuests + room.max_guests;
        const newBaby = hasBaby || room.allow_baby;
        const [useWaste, useRooms] = solve(index + 1, newGuests, usedRooms + 1, newBaby);
        
        // Choose better option
        let result;
        if (useWaste < skipWaste) {
            result = [useWaste, [room.id, ...useRooms]];
        } else {
            result = [skipWaste, [...skipRooms]];
        }
        
        dp.set(key, result);
        return result;
    }
    
    const [waste, selectedRooms] = solve(0, 0, 0, false);
    
    if (waste === Infinity || selectedRooms.length !== targetRooms) {
        return null;
    }
    
    return selectedRooms;
}

// Example Usage
const rooms = [
    { id: 1, max_guests: 3, allow_baby: false },
    { id: 2, max_guests: 2, allow_baby: true },
    { id: 3, max_guests: 5, allow_baby: false },
    { id: 4, max_guests: 4, allow_baby: true },
    { id: 5, max_guests: 2, allow_baby: false }
];

const rooms_num = 1
const guests = 2
const baby = true;

console.log(findBestRoomCombination(rooms, guests, rooms_num, baby));

console.log(findBestRoomCombinationDP(rooms, guests, rooms_num, baby));
*/