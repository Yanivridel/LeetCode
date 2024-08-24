
// 127. Word Ladder
// A transformation sequence from word beginWord to word 
// endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. 
// Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, 
// and a dictionary wordList, 
// return the number of words in the shortest transformation
//  sequence from beginWord to endWord, or 0 if no such sequence exists.

var ladderLength = function(beginWord, endWord, wordList) {
    let adjacencyList = {};

    if(!wordList.includes(endWord)) return 0;
    if(!wordList.includes(beginWord)) wordList.push(beginWord)

    for(let i=0; i < wordList.length; i++)
        addVertex(wordList[i],adjacencyList);

    for(let i=0; i < wordList.length; i++)
        for(let j=i+1; j < wordList.length; j++)
            if(check1diff(wordList[i],wordList[j]))
                addEdge(wordList[i],wordList[j],adjacencyList);

    const distance = bfsWithDistances(beginWord, adjacencyList);
    
    return distance[endWord] ? distance[endWord]+1 : 0;
};

function bfsWithDistances(startingVertex, adjacencyList) {
    let queue = [startingVertex];
    let visited = {};
    let distances = {};

    visited[startingVertex] = true;
    distances[startingVertex] = 0;

    while (queue.length > 0) {
        let currentVertex = queue.shift();

        adjacencyList[currentVertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                distances[neighbor] = distances[currentVertex] + 1;
                queue.push(neighbor);
            }
        });
    }
    return distances;
}
function addVertex(vertex, adjacencyList) {
    adjacencyList[vertex] = [];
}
function addEdge(vertex1, vertex2, adjacencyList) {
    adjacencyList[vertex1].push(vertex2);
    adjacencyList[vertex2].push(vertex1);
}
function check1diff(word1, word2) {
    let count = 0;
    for(let i=0; i < word1.length; i++){
        if(word1[i] !== word2[i])
            count++
        if(count > 1) return false;
    }
    return true;
}



// let beginWord = "hit", endWord = "cog";
// const wordList = ["hot","dot","dog","lot","log","cog"];
// const wordList = ["hot","dot","dog","lot","log"];

// let beginWord = "gtone", endWord = "spite";
// const wordList = ["stone","stony","story","store","spore","spire","spite",]

let beginWord = "hot", endWord = "dog";
const wordList = ["hot","dog"];
console.log(ladderLength(beginWord,endWord,wordList));




