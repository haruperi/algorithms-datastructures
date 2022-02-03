import { Node } from "./node.js"

class Queque {
    constructor(value) {
        const newNode = new Node(value)

        this.first = newNode
        this.last = newNode
        this.length = 1
    }

    enqueque(value){
        const newNode = new Node(value)

        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }

    dequeque(){
        if(this.length == 0)
            return undefined
        let current = this.first
        if (this.length == 1){
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
            current.next = null
        }
        this.length--
        return current
    }


}

export { Queque }