// In this problem, a rooted tree is a directed graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.

// The given input is a directed graph that started as a rooted tree with n nodes (with distinct values from 1 to n), with one additional directed edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed.

// The resulting graph is given as a 2D-array of edges. Each element of edges is a pair [ui, vi] that represents a directed edge connecting nodes ui and vi, where ui is a parent of child vi.

// Return an edge that can be removed so that the resulting graph is a rooted tree of n nodes. If there are multiple answers, return the answer that occurs last in the given 2D-array.

import { uf } from './../0-Collections/js-collections.js'

function findRedundantDirectedConnection(edges) {
    const unf = new uf.UnionFindNum();
    const parent = {};
    let cand1 = null, cand2 = null;

    for (const [u,v] of edges) {
        if (parent[v]) cand1 = [parent[v], v], cand2 = [u,v];
        else parent[v] = u;
    }

    for (const [u,v] of edges) {
        if (cand2 && u === cand2[0] && v === cand2[1]) continue;
        unf.makeSet(u); unf.makeSet(v);
        if (unf.connected(u,v)) return cand1 || [u,v];
        unf.union(u,v);
    }

    return cand2;
}

const edges = [[1,2],[1,3],[2,3]]
console.log(findRedundantDirectedConnection(edges)) // Output [2,3]