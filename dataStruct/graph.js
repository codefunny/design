"use strict";
class Graph {
    vertices = [];
    adjList = new Map();
    isDirected = false;
    constructor(isDirected = false) {
        this.isDirected = isDirected;
    }
    addVertex(v) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }
    addEdge(v, w) {
        if (this.adjList.get(v) === undefined) {
            this.addVertex(v);
        }
        if (this.adjList.get(w) === undefined) {
            this.addVertex(w);
        }
        this.adjList.get(v)?.push(w);
        if (this.isDirected) {
            this.adjList.get(w)?.push(v);
        }
    }
    getVertices() {
        return this.vertices;
    }
    getAdjList() {
        return this.adjList;
    }
}
// BFS: Breadth First Search
function BFS(graph, startNode) {
    const visited = new Set();
    const queue = [];
    const result = [];
    visited.add(startNode);
    queue.push(startNode);
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node);
        const neighbors = graph.getAdjList().get(node);
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result;
}
function DFS(graph, startNode) {
    const visited = new Set();
    const result = [];
    function dfs(node) {
        visited.add(node);
        result.push(node);
        const neighbors = graph.getAdjList().get(node);
        for (let i = 0; i < neighbors.length; i++) {
            const neighbor = neighbors[i];
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }
    dfs(startNode);
    return result;
}
