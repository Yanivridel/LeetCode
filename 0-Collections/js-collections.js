

/* LINKED LISTS */
//singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

export const linkedList = { ListNode };

/* HEAPS */
// Min Heap for Numbers
class MinHeapNum {
    constructor() {
        this.heap = [];
    }
 
    // Helper Methods
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }
 
    // Functions to create Min Heap
     
    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }
 
    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }
     
    // Removing an element will remove the
    // top element with highest priority then
    // heapifyDown will be called 
    remove() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }
 
    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }
 
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
 
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
     
    printHeap() {
        var heap =` ${this.heap[0]} `
        for(var i = 1; i<this.heap.length;i++) {
            heap += ` ${this.heap[i]} `;
        }
        console.log(heap);
    }
}

// Min Heap for listNode
class MinHeapList {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    // Helper Methods
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }
    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }
    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    // Functions to create Min Heap
    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        this.size--;
        return item;
    }

    insert(item) {
        if(!item) return;
        this.heap.push(item);
        this.heapifyUp();
        this.size++;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index).val > this.heap[index].val) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index).val < this.leftChild(index).val) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index].val < this.heap[smallerChildIndex].val) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }

    printHeap() {
        var heap =` ${this.heap[0]} `
        for(var i = 1; i<this.heap.length;i++) {
            heap += ` ${this.heap[i]} `;
        }
        console.log(heap);
    }
}

export const heap = { MinHeapNum, MinHeapList };

/* GRAPHS */
function BFS(startingVertex, adjacencyList) {
    let queue = [startingVertex];
    let visited = {};
    let distances = {};
    let PI = {}; // New array to store parent vertices

    visited[startingVertex] = true;
    distances[startingVertex] = 0;
    PI[startingVertex] = null; // Set parent of starting vertex to null

    while (queue.length > 0) {
        let currentVertex = queue.shift();

        adjacencyList[currentVertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                distances[neighbor] = distances[currentVertex] + 1;
                PI[neighbor] = currentVertex; // Set parent of neighbor
                queue.push(neighbor);
            }
        });
    }

    return { distances, PI };
}
function addVertex(vertex, adjacencyList) {
    adjacencyList[vertex] = [];
}
function addEdge(vertex1, vertex2, adjacencyList, undirected = false) {
    adjacencyList[vertex1].push(vertex2);
    if(undirected) adjacencyList[vertex2].push(vertex1);
}
function removeEdge(vertex1, vertex2, adjacencyList, undirected = false) {
    adjacencyList[vertex1] = adjacencyList[vertex1].filter(v => v !== vertex2);
    if(undirected) adjacencyList[vertex2] = adjacencyList[vertex2].filter(v => v !== vertex1);
}

function DFS(startingVertex, adjacencyList) {
    let stack = [startingVertex];
    let visited = {};
    let distances = {};
    let PI = {};

    visited[startingVertex] = true;
    distances[startingVertex] = 0;
    PI[startingVertex] = null;

    while (stack.length > 0) {
        let currentVertex = stack.pop();

        adjacencyList[currentVertex].forEach(neighbor => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                distances[neighbor] = distances[currentVertex] + 1;
                PI[neighbor] = currentVertex;
                stack.push(neighbor);
            }
        });
    }

    return { distances, PI };
}

function SCC(adjacencyList) {
    const reversedAdjacencyList = reverseGraph(adjacencyList);
    const visited = {};
    const finishingTimes = {};
    let time = 0;
    const SCCs = [];

    function reverseGraph(adjacencyList) {
        const reversedAdjacencyList = {};
    
        for (const vertex in adjacencyList) {
            reversedAdjacencyList[vertex] = []; // Initialize the array for the current vertex
    
            for (const neighbor of adjacencyList[vertex]) {
                if (!reversedAdjacencyList[neighbor]) {
                    reversedAdjacencyList[neighbor] = []; // Initialize the array for the neighbor if it doesn't exist
                }
                reversedAdjacencyList[neighbor].push(vertex);
            }
        }
    
        return reversedAdjacencyList;
    }

    function DFSofSCC(vertex, adjacencyList, visited, finishingTimes, time, result = null) {
        visited[vertex] = true;
    
        if (result) {
            result.push(parseInt(vertex)); // Collect vertices belonging to the current SCC as numbers
        }
    
        for (const neighbor of adjacencyList[vertex]) {
            if (!visited[neighbor]) {
                DFSofSCC(neighbor, adjacencyList, visited, finishingTimes, time, result);
            }
        }
    
        finishingTimes[vertex] = time++;
        return time;
    }

    // First pass: Reverse graph DFS to compute finishing times
    for (const vertex in reversedAdjacencyList) {
        if (!visited[vertex]) {
            time = DFSofSCC(vertex, reversedAdjacencyList, visited, finishingTimes, time);
        }
    }

    // Second pass: Original graph DFS to find SCCs
    for (const vertex in adjacencyList) {
        visited[vertex] = false;
    }
    
    // Convert vertex keys to numbers and sort based on finishing times
    const sortedVertices = Object.keys(finishingTimes)
        .map(Number) // Ensure vertices are treated as numbers
        .sort((a, b) => finishingTimes[b] - finishingTimes[a]);

    for (const vertex of sortedVertices) {
        if (!visited[vertex]) {
            const SCC = [];
            DFSofSCC(vertex, adjacencyList, visited, finishingTimes, time, SCC);
            SCCs.push(SCC);
        }
    }

    return SCCs;
}

// wrong
function STRONG(adjacencyList) {
    const directedAdjacencyList = [];

    for (let vertex in adjacencyList) {
        directedAdjacencyList[vertex] = [];

        for (let adjacentVertex of adjacencyList[vertex]) {
            // Add edge from vertex to adjacentVertex only if it's not already directed the other way
            if (!directedAdjacencyList[adjacentVertex] || !directedAdjacencyList[adjacentVertex].includes(parseInt(vertex))) {
                directedAdjacencyList[vertex].push(adjacentVertex);
            }
        }
    }

    return directedAdjacencyList;
}

// wrong
function directGraph(adjacencyList) {
    const directedAdjacencyList = {};
  
    // Initialize the directed adjacency list
    for (const vertex in adjacencyList) {
      directedAdjacencyList[vertex] = [];
    }
  
    // Use a set to keep track of processed edges (using tuples)
    const processedEdges = new Set();
  
    // Process each vertex
    for (const vertex in adjacencyList) {
      for (const neighbor of adjacencyList[vertex]) {
        const edge = [vertex, neighbor];
        const reverseEdge = [neighbor, vertex];
  
        // Only add the directed edge if it's not already processed
        if (!processedEdges.has(edge.toString()) && !processedEdges.has(reverseEdge.toString())) {
          directedAdjacencyList[vertex].push(neighbor);
          processedEdges.add(edge.toString());
        }
  
        // Add the reverse edge if it's not already processed
        if (!processedEdges.has(reverseEdge.toString())) {
          directedAdjacencyList[neighbor].push(vertex);
          processedEdges.add(reverseEdge.toString());
        }
      }
    }
  
    return directedAdjacencyList;
}

export const graph = { directGraph, addVertex, addEdge, removeEdge, DFS, SCC, BFS, STRONG };

/* UNION FIND */
// Union Find for Numbers
class UnionFindNum {
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

export const uf = { UnionFindNum };



