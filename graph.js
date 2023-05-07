class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    if (vertex instanceof Node) { 
      this.nodes.add(vertex);
      }
      else {
        throw new Error('The Node you are trying to add to the graph is not an instance of Node.');
        }
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {  
    if (Array.isArray(vertexArray)) {
      vertexArray.forEach(vertex => {
        if (vertex instanceof Node) {
          this.nodes.add(vertex);
          }
          else {
            throw new Error('The Node you are trying to add to the graph is not an instance of Node.');
            }
            });
            }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) { 
    if (v1 instanceof Node && v2 instanceof Node) {
      if (this.nodes.has(v1) && this.nodes.has(v2)) {
        this.nodes.get(v1).adjacent.add(v2);
        this.nodes.get(v2).adjacent.add(v1);
        }
        else {
          throw new Error('The Node you are trying to add to the graph is not an instance of Node.'); 
          }
          }
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {  
    if (v1 instanceof Node && v2 instanceof Node) {
      if (this.nodes.has(v1) && this.nodes.has(v2)) {
        this.nodes.get(v1).adjacent.delete(v2);
        this.nodes.get(v2).adjacent.delete(v1);
        }
        else {
          throw new Error('The Node you are trying to add to the graph is not an instance of Node.');
          }
          }
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    if (vertex instanceof Node) {
      this.nodes.delete(vertex);
      this.nodes.forEach(node => {
        node.adjacent.delete(vertex);
        });
        }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let visited = new Set();
    let path = [];
    let queue = [start];
    let visitedNodes = [];
    let visitedNodesArray = [];
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) { 
    let visited = new Set();
    let path = [];
    let queue = [start];
    let visitedNodes = [];
    let visitedNodesArray = [];
  }
}

module.exports = {Graph, Node}