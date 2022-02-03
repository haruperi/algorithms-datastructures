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

    getNode(index){
        if (index < 0 || index > this.length)
            return undefined

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
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

        if (current) {
            const newNode = new Node(value)
            newNode.next = current.next
            current.next = newNode
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

        let previous = this.getNode(index-1)

        if (previous) {
            let current = previous.next
            previous.next = current.next
            current.next = null
            this.length--
            return current
        }
        return undefined
    }




}

export { Linkedlist }