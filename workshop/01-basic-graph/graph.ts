export type NodeId = string;

export interface Node {
    id: NodeId;
}

export interface Edge {
    from: NodeId;
    to: NodeId;
}