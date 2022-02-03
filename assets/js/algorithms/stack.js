import { Node } from "./node.js"

class Stack {
    constructor(value) {
        const newNode = new Node(value)

        this.top = newNode
        this.length = 1
    }

}




export { Stack }