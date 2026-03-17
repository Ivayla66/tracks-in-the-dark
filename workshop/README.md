# Tracks in the Dark - Workshop

Welcome to the workshop repository for the Tracks in the Dark hackathon regarding Graphs.


## Basic Graph Implementation

Let us begin with implementing a basic graph in TypeScript.
The first step is the ability to identify a single node in the graph.
A `type` is created to give a name to the identifier, which is an mapping for a `string` type.
This way, it is not required to remember which type was assigned as an Id,
since the language server will provide this information for us.
It also reads better, but that's personal preference.

```ts
export type NodeId = string;
```

The next step is to create the graph object.
As said before, a graph contains nodes and edges, so let's model them.
Since the structure of the data is being defined, an `interface` is used.
A class is overkill, we are only defining structure, not behaviour.
A type is designed for complexer structures or type mappings.

```ts
// A node is a single point on the graph
export interface Node {
    id: NodeId;
}

// An edge is a connection between two nodes
export interface Edge {
    from: NodeId;
    to: NodeId;
}
```