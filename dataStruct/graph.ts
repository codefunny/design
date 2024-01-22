type GraphItemType = string | number;

class Graph {
    private vertices: (GraphItemType)[] = [];
    private adjList: Map<GraphItemType, GraphItemType[]> = new Map();
    private isDirected: boolean = false;

    constructor(isDirected: boolean = false) {
        this.isDirected = isDirected;
    }
    
    addVertex(v: GraphItemType) {
        this.vertices.push(v);
        this.adjList.set(v, []);
    }
    
    addEdge(v: GraphItemType, w: GraphItemType) {
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

    getVertices(): GraphItemType[] {
        return this.vertices;
    }

    getAdjList(): Map<GraphItemType, GraphItemType[]> {
        return this.adjList;
    }
}

// BFS: Breadth First Search
function BFS(graph: Graph, startNode: GraphItemType):GraphItemType[] {
    const visited: Set<GraphItemType> = new Set();
    const queue: GraphItemType[] = [];
    const result: GraphItemType[] = [];

    visited.add(startNode);
    queue.push(startNode);

    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node!);
        const neighbors = graph.getAdjList().get(node!);
        for (let i = 0; i < neighbors!.length; i++) {
            const neighbor = neighbors![i];
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}

function DFS(graph: Graph, startNode: GraphItemType): GraphItemType[] {
    const visited: Set<GraphItemType> = new Set();
    const result: GraphItemType[] = [];

    function dfs(node: GraphItemType) {
        visited.add(node);
        result.push(node);
        const neighbors = graph.getAdjList().get(node);
        for (let i = 0; i < neighbors!.length; i++) {
            const neighbor = neighbors![i];
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }

    dfs(startNode);
    return result;
}