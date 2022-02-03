import { BSTNode } from "./node.js";

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insertNode(value){
        const newNode = new BSTNode(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }

        let current = this.root

        while (true){
            if (newNode.value === current.value)
                return undefined
            if (newNode.value < current.value){
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }
}


export { BinarySearchTree }