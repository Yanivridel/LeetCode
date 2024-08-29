
// 1192. Critical Connections in a Network
// There are n servers numbered from 0 to n - 1 
// connected by undirected server-to-server connections 
// forming a network where connections[i] = [ai, bi] 
// represents a connection between servers ai and bi. 
// Any server can reach other servers directly or indirectly 
// through the network.

// A critical connection is a connection that, if removed, 
// will make some servers unable to reach some other server.

// Return all critical connections in the network in any order.

// Using SCC for find cross edges O(V+E)
import { graph } from './../0-Collections/js-collections.js';

var criticalConnections = function(n, connections) {
    const res = [];
    let adjacencyList = {};

    for(let i=0; i < n; i++)
        graph.addVertex(i, adjacencyList);

    for(let i=0; i < connections.length; i++){
        graph.addEdge(connections[i][0],connections[i][1], adjacencyList, 1);
    }

    // let result = adjacencyList;
    console.log(adjacencyList);
    
    let result = graph.directGraph(adjacencyList);
    console.log(result);
        
    result = graph.SCC(result)

    return result
}


// Bad runtime using BFS O(E*(V+E))
/*
var criticalConnections = function(n, connections) {
    const res = [];
    let adjacencyList = {};

    for(let i=0; i < n; i++)
        graph.addVertex(i, adjacencyList);

    for(let i=0; i < connections.length; i++){
        graph.addEdge(connections[i][0],connections[i][1], adjacencyList,1);
        graph.addEdge(connections[i][1],connections[i][0], adjacencyList,1);
    }

    for(let i=0; i < connections.length; i++){
        graph.removeEdge(connections[i][0],connections[i][1], adjacencyList, 1);
        graph.removeEdge(connections[i][1],connections[i][0], adjacencyList, 1);

        const { distances } = graph.BFS(connections[i][0], adjacencyList);

        if(!distances[connections[i][1]])
            res.push(connections[i]);

        graph.addEdge(connections[i][0],connections[i][1], adjacencyList, 1);
        graph.addEdge(connections[i][1],connections[i][0], adjacencyList, 1);
    }

    return res;
};
*/

const n = 4, connections = [[0,1],[1,2],[2,0],[1,3]];
console.log(criticalConnections(n,connections));
