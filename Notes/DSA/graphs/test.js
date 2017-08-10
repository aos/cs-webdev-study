const Graph = require('./graph');
const Stack = require('../stacks/Stacks.js').Stack;

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

let fromVertex = myVertices[0];
let shortestPathA = me.BFS(fromVertex);

// Build path from vertex to other vertices

for (let i = 1;i < myVertices.length; i++) {
  let toVertex = myVertices[i],
      path = new Stack(); 

  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    path.push(v);
  }
  path.push(fromVertex);
  let s = path.pop();
  while (!path.isEmpty()) {
    s += ' - ' + path.pop();
  }
  console.log(s);
}
