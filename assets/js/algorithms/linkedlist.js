import { Node } from "./node.js";

class Linkedlist {

    constructor(value) {
        const newNode = new Node(value)

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
            this.tail = newNode
        }

        this.length++
        return this
    }

    popNode() {
        if(!this.head)
            return undefined

        let current = this.head
        let previous = this.head

        while (current.next){
            previous = current
            current = current.next
        }

        this.tail = previous
        this.tail.next = null
        this.length--

        if (this.length === 0){
            this.head = null
            this.tail = null
        }

        return current
    }

    unshiftNode(value){
        const  newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    shiftNode(){
        if (!this.head)
            return undefined

        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--

        if (this.length === 0){
            this.tail = null
        }

        return temp
    }


}

export { Linkedlist }