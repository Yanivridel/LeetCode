// You have an undirected, connected graph of n nodes labeled from 0 to n - 1.
//  You are given an array graph where graph[i] is a list of 
//  all the nodes connected with node i by an edge.

// Return the length of the shortest path that visits every node. 
// You may start and stop at any node, you may revisit nodes multiple times, 
// and you may reuse edges

import { graph } from "../0-Collections/js-collections.js";

function shortestPathLength(g) {
    const n = g.length;
    const allVisited = (1 << n) - 1;
    let adjacencyList = {};

    for (let mask = 1; mask <= allVisited; mask++) {
        for (let node = 0; node < n; node++) {
            if (!(mask & (1 << node))) continue;
            const state = `${node}|${mask}`;
            graph.addVertex(state, adjacencyList);

            for (let nei of g[node]) {
                const nextMask = mask | (1 << nei);
                const nextState = `${nei}|${nextMask}`;
                graph.addEdge(state, nextState, adjacencyList, false);
            }
        }
    }

    let minSteps = Infinity;

    for (let i = 0; i < n; i++) {
        const startState = `${i}|${1 << i}`;
        const { distances } = graph.BFS(startState, adjacencyList);

        for (let j = 0; j < n; j++) {
            const goalState = `${j}|${allVisited}`;
            if (distances[goalState] !== undefined) {
                minSteps = Math.min(minSteps, distances[goalState]);
            }
        }
    }

    return minSteps;
}

console.log(shortestPathLength([[1,2,3],[0],[0],[0]])); // Output: 4
console.log(shortestPathLength([[1],[0,2,4],[1,3,4],[2],[1,2]])); // Output: 4