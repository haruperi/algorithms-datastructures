import {DLLNode, Node} from "./node.js";

class Doublelinkedlist {
    constructor(value) {
        const newNode = new DLLNode(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    pushNewNode(value){
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++
        return this
    }
}




export { Doublelinkedlist }