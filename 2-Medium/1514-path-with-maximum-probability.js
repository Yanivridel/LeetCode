
// 1514. Path with Maximum Probability
// You are given an undirected weighted graph of n 
// nodes (0-indexed), represented by an edge list where 
// edges[i] = [a, b] is an undirected edge connecting the 
// nodes a and b with a probability of success of traversing 
// that edge succProb[i].

// Given two nodes start and end, find the path with the 
// maximum probability of success to go from start to end 
// and return its success probability.

// If there is no path from start to end, return 0. 
// Your answer will be accepted if it differs from the 
// correct answer by at most 1e-5

import { graph } from './../0-Collections/js-collections.js'

var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const adjacencyList = {};
    for(let i=0; i < edges.length; i++){
        let weight = Math.log(succProb[i]);
        if(weight !== 0) weight = -weight;
        graph.addWeightedEdge(edges[i][0], edges[i][1], weight, adjacencyList, true);
    }
    if(!adjacencyList[start_node]) return 0;
    const { distances, PI } = graph.DijkstraHeap(start_node,adjacencyList);
    
    return distances[end_node] ? Math.exp(-distances[end_node]): 0;
};

const n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2;

// const n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2

// const n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2

// const n = 5, edges = [[1,4],[2,4],[0,4],[0,3],[0,2],[2,3]], succProb = [0.37,0.17,0.93,0.23,0.39,0.04]
// const start =3, end = 4

// const n = 500 ,edges = [[193,229],[133,212],[224,465]]
// const succProb =[0.91,0.78,0.64], start = 4, end =364;

console.log(maxProbability(n,edges,succProb,start,end));
