function shortestPath(graph) {
  const INF = Number.MAX_SAFE_INTEGER;

  this.graph = graph;

  // Calculate minimum distance
  const minDistance = (dist, visited) => {
    let min      = INF,
        minIndex = -1;

    for (let v = 0; v < dist.length; v++) {
      if (visited[v] == false && dist[v] <= min) {
        min = dist[v];
        minIndex = v;
      }
    }
    return minIndex;
  };

  this.dijkstra = function(src) {
    const dist    = [],
          visited = [];

    let length = this.graph.length;

    for (let i = 0; i < length; i++) {
      dist[i] = INF;
      visited[i] = false;
    }

    dist[src] = 0;

    for (let i = 0; i < length - 1; i++) {
      let u = minDistance(dist, visited);

      visited[u] = true;

      for (let v = 0; v < length; v++) {
        if (!visited[v] &&
            this.graph[u][v] != 0 &&
            dist[u] != INF &&
            dist[u] + this.graph[u][v] < dist[v]) {

          dist[v] = dist[u] + this.graph[u][v];

        }
      }
    }
    return dist;
  }

  // Calculate all the shortest paths on a graph
  this.floyd = function() {
    let dist = [],
        length = this.graph.length,
        i, j, k;

    for (i = 0; i < length; i++) {
      dist[i] = [];
      for (j = 0; j < length; j++) {
        dist[i][j] = this.graph[i][j];
      }
    }

    for (k = 0; k < length; k++) {
      for (i = 0; i < length; i++) {
        for (j = 0; j < length; j++) {
          if (dist[i][k] + dist[k][j] < dist[i][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
    return dist;
  }
}

if (require.main === module) {
  // function(process.argv[2], process.argv[3])
  console.log(new shortestPath(process.argv[2]).floyd())
}
else {
  module.exports = shortestPath;
}
