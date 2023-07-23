class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const A = new Node(1);
const B = new Node(2);
const C = new Node(3);
const D = new Node(4);
const E = new Node(5);
const F = new Node(6);
const G = new Node(7);

// added the nodes for A (1)
A.left = B;
A.right = C;
// added the nodes for B (2)
B.left = D;
B.right = E;
// added the nodes for C (3)
C.left = F;
C.right = G;







export {};