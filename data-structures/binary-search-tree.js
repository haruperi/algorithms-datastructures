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

    containsNode(value){
        if (this.root == null)
            return false

        let current = this.root
        while (current){
            if (value < current.value){
                current = current.left
            } else if (value > current.value){
                current = current.right
            } else {
                return true
            }
        }
        return false
    }

    minValueNode(currentNode){
        while (currentNode.left != null){
            currentNode = currentNode.left
        }
        return currentNode
    }
}


export { BinarySearchTree }