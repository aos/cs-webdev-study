const Dictionary = require('../dicts-hashes/dictionary');
const Queue = require('../queues/Queues.js');
// Graph data structure (adjancency list)

module.exports = function Graph() {
  const vertices = [];
  const adjList = new Dictionary();

  // Initialize all colors (as white)
  // Legend: 
  // - White - unvisited
  // - Gray - visited but not explored
  // - Black - fully explored
  const initializeColor = () => {
    const color = {}; 
    for (let i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white';
    }
    return color;
  };

  const DFSVisit = (u, color, d, f, p, callback) => {
    console.log('discovered ' + u);

    color[u] = 'gray';
    d[u] = ++time;

    if (callback) {
      callback(u);
    }

    let neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
      let w = neighbors[i];
      if (color[w] === 'white') {
        p[w] = u;
        dfsVisit(w, color, callback);
      }
    }
    color[u] = 'black';
    f[u] = ++time;
    console.log('explored ' + u);
  }

  // Vertex = point on graph
  this.addVertex = function(v) {
    vertices.push(v);
    adjList.set(v, []);
  };

  // Edge = line connecting two vertices
  // Receives two vertices as parameters
  this.addEdge = function(v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };

  this.toString = function() {
    let s = '';

    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + ' -> ';
  
      const neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' ';
      }
      s += '\n';
    }
    return s;
  };

  // Breadth-first search (wide -> deep)
  // Returns distances and predecessors (from vertex)
  this.BFS = function(v, callback) {
    const color = initializeColor(),
          queue = new Queue(),
          d     = {}, // Distances d[u] from v to u
          pred  = {}; // Predecessors from v to u

    queue.enqueue(v);

    for (let i = 0; i < vertices.length; i++) {
      d[vertices[i]]    = 0;
      pred[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
      // Dequeue vertex and get neighbors
      let u = queue.dequeue(),
          neighbors = adjList.get(u);

      // Mark vertex as visited
      color[u] = 'gray';

      // Queue all neighbors (if not visited)
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'gray';

          // Add one to the distance
          d[w] = d[u] + 1;
          // Mark its predecessor
          pred[w] = u

          queue.enqueue(w);
        }
      }
      // Mark vertex as explored
      color[u] = 'black';

      // Run callback if supplied
      if (callback) {
        callback(u);
      }
    }

    // Return distances and predecessors array
    return {
      distances: d,
      predecessors: pred
    }
  };

  // Depth-first search (deep -> wide)
  // Constructs a forest (collection of rooted trees) together with a set of source vertices (roots)
  // Outputs two arrays (discovery time and finish explorer time)
  let time = 0;
  this.DFS = function(callback) {
    const color = initializeColor(),
          d     = {}, // Discovery time
          f     = {}, // Finish time
          p     = {}; // Predecessors

    let time = 0;

    // Initialize objects
    for (let i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = null;
    }

    for (let i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === 'white') {
        DFSVisit(vertices[i], color, d, f, p, callback);
      }
    }
    return {
      discovery    : d,
      finished     : f,
      predecessors : p
    }
  };
}
