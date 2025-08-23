// You are given a network of n nodes, labeled from 1 to n. 
// You are also given times, a list of travel times as 
// directed edges times[i] = (ui, vi, wi), where ui is the source node, 
// vi is the target node, and wi is the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. 
// Return the minimum time it takes for all the n nodes to receive the signal.
// If it is impossible for all the n nodes to receive the signal, return -1.

import { graph } from "../0-Collections/js-collections.js";

function networkDelayTime(times, n, k) {
    let adjacencyList = {};
    for (let [u, v, w] of times) {
        graph.addWeightedEdge(u, v, w, adjacencyList, false); 
    }

    const { distances } = graph.DijkstraHeap(k, adjacencyList);

    let maxDist = -Infinity;
    for (let i = 1; i <= n; i++) {
        if (distances[i] === undefined || distances[i] === Infinity) {
            return -1;
        }
        maxDist = Math.max(maxDist, distances[i]);
    }

    return maxDist;
}

let times = [[2,1,1],[2,3,1],[3,4,1]];
let n = 4;
let k = 2;

console.log(networkDelayTime(times, n, k)); // Output: 2
