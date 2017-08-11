const Graph = require('./graph');

const graph = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');

let result = graph.DFS();

console.log(result);
