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

    popNode() {
        if(this.length === 0)
            return undefined

        let temp
        if (this.length === 1){
            this.head = null
            this.tail = null
        } else {
            temp = this.tail
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }

        this.length--
        return temp

    }


    unshiftNode(value){
        const  newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.length++
        return this
    }

    shiftNode(){
        if (this.length === 0)
            return undefined
        let temp = this.head
        if (this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--

        return temp
    }
}




export { Doublelinkedlist }