import {Linkedlist} from "./algorithms/linkedlist.js";

let myLinkedList = new Linkedlist(11)
myLinkedList.pushNewNode(3)
myLinkedList.pushNewNode(23)
myLinkedList.pushNewNode(7)
//console.log(myLinkedList.popNode())
//console.log(myLinkedList.popNode())
//console.log(myLinkedList.popNode())
myLinkedList.unshiftNode(4)
console.log(myLinkedList)