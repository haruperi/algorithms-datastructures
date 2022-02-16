import { Node } from "./node.js";

class Linkedlist {

    constructor(value) {
        this.head = null
        this.tail = this.head
        this.length = 0
    }

    pushNode(value){
        const newNode = new Node(value)

        if (this.length === 0)
        {
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
    if (this.length === 0)
        return undefined


        let current = this.head
        let previous = null

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

        if(this.length === 0){
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
        if (this.length === 0)
            return undefined

        let firstNode =  this.head
        if (this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            firstNode.next = null
        }
        this.length--
        return firstNode
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
        if (index < 0)
            return "Index can not be less than zero"

        if (index === 0)
            return this.unshiftNode(value)

        if (index >= this.length)
            return this.pushNode(value)

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

    reverseLinkedList(){
        if (this.length === 1)
            return this

        let current = this.head
        this.head = this.tail
        this.tail = current

        let nextNode
        let previous = null

        for (let i = 0; i < this.length; i++) {
            nextNode = current.next
            current.next = previous
            previous = current
            current = nextNode
        }
        return this
    }

    printll(){
        let current = this.head
        for (let i = 0; i < this.length; i++) {
            if (current == this.tail){
                console.log(
                    `value : ${current.value}
                     next : null`
                )
            } else {
                console.log(
                    `value : ${current.value}
                 next : ${current.next.value}`
                )
            }
            current = current.next
        }
    }




}

export { Linkedlist }