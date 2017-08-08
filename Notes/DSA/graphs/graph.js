const Dictionary = require('../dicts-hashes/dictionary');
// Graph data structure (adjancency list)

module.exports = function Graph() {
  const vertices = [];
  const adjList = new Dictionary();

  this.addVertex = function(v) {
    vertices.push(v);
    adjList.set(v, []);
  };

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
}
