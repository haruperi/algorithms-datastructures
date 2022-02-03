import { Node } from "./node.js"

class Queque {
    constructor(value) {
        const newNode = new Node(value)

        this.first = newNode
        this.last = newNode
        this.length = 1
    }
}

export { Queque }