const Graph = require('./graph');

const me = new Graph();

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
  me.addVertex(myVertices[i]);
}

me.addEdge('A', 'B');
me.addEdge('A', 'C');
me.addEdge('A', 'D');
me.addEdge('C', 'D');
me.addEdge('C', 'G');
me.addEdge('D', 'G');
me.addEdge('D', 'H');
me.addEdge('B', 'E');
me.addEdge('B', 'F');
me.addEdge('E', 'I');

console.log(me.toString());
