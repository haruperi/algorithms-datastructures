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

    getNode(index){
        if (index < 0 || index > this.length)
            return undefined

        let current = this.head
        if (index < this.length/2){
            for (let i = 0; i < index; i++) {
                current = current.next
            }
        }

        current = this.tail
        for (let i = this.length-1; i > index; i--) {
            current = current.prev
        }

        return current

    }

    setNode(index, value){
        let current = this.getNode(index)

        if (current) {
            current.value = value
            return true
        }
        return false
    }

    insetNode(index, value){
        if (index === 0)
            return this.unshiftNode(value)

        if (index === this.length)
            return this.pushNewNode(value)

        let current = this.getNode(index-1)
        let after = current.next

        if (current) {
            const newNode = new Node(value)
            newNode.next = after
            newNode.prev = current
            current.next = newNode
            after.prev = newNode
            this.length++
            return true
        }
        return false
    }

    removeNode(index){
        if (index === 0)
            return this.shiftNode()

        if (index === this.length-1)
            return this.popNode()

        let current = this.getNode(index)

        if (current) {
            current.prev.next = current.next
            current.next.prev = current.prev
            current.next = null
            current.prev = null
            this.length--
            return current
        }
        return undefined
    }


}




export { Doublelinkedlist }