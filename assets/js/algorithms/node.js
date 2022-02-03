// Node For Single Linked List
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// Node For Double Linked List
class DLLNode {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

export { Node, DLLNode, BSTNode }