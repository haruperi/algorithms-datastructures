import {Node} from "./node.js";

class Linkedlist {

    constructor(value) {
        //super(value);
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
}



export {Linkedlist}