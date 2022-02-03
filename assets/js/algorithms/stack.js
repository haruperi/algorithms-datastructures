import { Node } from "./node.js"

class Stack {
    constructor(value) {
        const newNode = new Node(value)

        this.top = newNode
        this.length = 1
    }

    //This code is exactly the same as UNSHIFT in linked list just without the tail and head replaced by top
    pushStack(value){
        const  newNode = new Node(value)

        if (this.length === 0) {
            this.top = newNode

        } else {
            newNode.next = this.top
            this.top = newNode
        }

        this.length++
        return this
    }



}




export { Stack }