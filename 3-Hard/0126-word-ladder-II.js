
// 126. Word Ladder II
// A transformation sequence from word beginWord to word endWord
//  using a dictionary wordList is a sequence of words beginWord
//   -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord
//  does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord,
//  and a dictionary wordList, return all the
//   shortest transformation sequences from beginWord
//    to endWord, or an empty list if no such sequence exists. 
//    Each sequence should be returned as a list of the words
//     [beginWord, s1, s2, ..., sk].

// 98% runtime
var findLadders = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return [];
    
    // Create a generic transformation map
    const genericMap = {};
    const length = beginWord.length;

    wordList.push(beginWord);
    wordList.forEach(word => {
        for (let i = 0; i < length; i++) {
            const genericWord = word.slice(0, i) + '*' + word.slice(i + 1);            
            if (!genericMap[genericWord]) {
                genericMap[genericWord] = [];
            }
            genericMap[genericWord].push(word);
        }
        
    });

    const [distance, pi] = BFS(beginWord, endWord, genericMap, length);

    return pi[endWord] === undefined ? [] : recoverPaths(endWord, pi);
};

function BFS(beginWord, endWord, genericMap, wordLength) {
    const queue = [beginWord];
    const visited = {};
    const d = {};
    const pi = {};

    visited[beginWord] = true;
    d[beginWord] = 0;
    pi[beginWord] = null;

    while (queue.length > 0) {
        let currentVertex = queue.shift();

        for (let i = 0; i < wordLength; i++) {
            const genericWord = currentVertex.slice(0, i) + '*' + currentVertex.slice(i + 1);

            if (!genericMap[genericWord]) continue;

            genericMap[genericWord].forEach(neighbor => {
                if (!visited[neighbor] || d[neighbor] === d[currentVertex] + 1) {
                    if (!visited[neighbor]) {
                        visited[neighbor] = true;
                        d[neighbor] = d[currentVertex] + 1;
                        queue.push(neighbor);
                    }

                    if (d[neighbor] === d[currentVertex] + 1) {
                        if (!pi[neighbor]) {
                            pi[neighbor] = [];
                        }
                        pi[neighbor].push(currentVertex);
                    }
                }
            });
        }
    }

    return [d, pi];
}

function recoverPaths(endWord, pi) {
    let stack = [[endWord]];
    let paths = [];

    while (stack.length > 0) {
        let currentPath = stack.pop();
        let lastNode = currentPath[currentPath.length - 1];

        if (!pi[lastNode]) {
            paths.push(currentPath);
        } else {
            pi[lastNode].forEach(parent => {
                stack.push([...currentPath, parent]);
            });
        }
    }
    return paths.map(path => path.reverse());
}




// let beginWord = "hit", endWord = "cog";
// const wordList = ["hot","dot","dog","lot","log","cog"];
// const wordList = ["hot","dot","dog","lot","log"];

// let beginWord = "gtone", endWord = "spite";
// const wordList = ["stone","stony","story","store","spore","spire","spite",]

// let beginWord = "hot", endWord = "dog";
// const wordList = ["hot","dog"];

let beginWord = "red", endWord = "tax";
const wordList = ["ted","tex","red","tax","tad","den","rex","pee"];
console.log(findLadders(beginWord,endWord,wordList));


// Bad runtime
/* 
var findLadders = function(beginWord, endWord, wordList) {
    let adjacencyList = {};

    if(!wordList.includes(endWord)) return [];
    if(!wordList.includes(beginWord)) wordList.push(beginWord)

    for(let i=0; i < wordList.length; i++)
        addVertex(wordList[i],adjacencyList);

    for(let i=0; i < wordList.length; i++)
        for(let j=i+1; j < wordList.length; j++)
            if(check1diff(wordList[i],wordList[j]))
                addEdge(wordList[i],wordList[j],adjacencyList);
    
    const [distance,pi] = BFS(beginWord, adjacencyList);

    console.log(distance,pi);
    

    return pi[endWord] === undefined ?  [] : recoverPaths(endWord,pi);
};

function BFS(startingVertex, adjacencyList) {
    const queue = [startingVertex];
    const visited = {};
    const d = {};
    const pi = {};

    visited[startingVertex] = true;
    d[startingVertex] = 0;
    pi[startingVertex] = null;

    while (queue.length > 0) {
        let currentVertex = queue.shift();

        adjacencyList[currentVertex].forEach(neighbor => {
            if (!visited[neighbor] || d[neighbor] === d[currentVertex] + 1) {
                visited[neighbor] = true;
                if(d[neighbor] === d[currentVertex] + 1){
                    if(!pi[neighbor].includes(currentVertex))
                        pi[neighbor].push(currentVertex);
                }
                else {
                    d[neighbor] = d[currentVertex] + 1;
                    pi[neighbor] = [currentVertex];
                }
                queue.push(neighbor);
            }
        });
    }
    return [d,pi];
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
function recoverPaths(endWord, pi) {
    let stack = [[endWord]];
    let paths = [];

    while (stack.length > 0) {
        let currentPath = stack.pop(); 
        let lastNode = currentPath[currentPath.length - 1]; 

        if (pi[lastNode] === null || pi[lastNode] === undefined) {
            paths.push(currentPath);
        } else {
            pi[lastNode].forEach(parent => {
                stack.push([...currentPath, parent]); 
            });
        }
    }
    return paths.map(path => path.reverse());
}
*/
