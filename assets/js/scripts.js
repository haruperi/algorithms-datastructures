import { Linkedlist } from "./data-structures/linkedlist.js"
import { Doublelinkedlist} from "./data-structures/doublelinkedlist.js"
import { Stack } from "./data-structures/stack.js"
import { Queque } from "./data-structures/queque.js"
import { BinarySearchTree } from "./data-structures/binary-search-tree.js";
import { Hashtables } from "./data-structures/hashtables.js";

/*****     Data Structures : Linked List     *****/
/* Constructor */
// let linkedlist = new Linkedlist(4)


/* Push */
// linkedlist.pushNewNode(11)
// linkedlist.pushNewNode(32)
// linkedlist.pushNewNode(48)
// linkedlist.pushNewNode(99)

/* Pop */
//linkedlist.popNode()
//linkedlist.popNode()
//console.log(linkedlist.popNode())

/* unshift */
//linkedlist.unshiftNode(11)
//linkedlist.unshiftNode(88)
//linkedlist.unshiftNode(2)

/* shift */
//linkedlist.shiftNode(11)
// console.log(linkedlist.shiftNode())
// linkedlist.shiftNode()
// console.log(linkedlist.shiftNode())

/* Get */
// console.log(linkedlist.getNode(3))

/* Set */
// console.log(linkedlist.setNode(2,100))

/* Insert */
// console.log(linkedlist.insetNode(2,100))

/* Remove */
// console.log(linkedlist.removeNode(2))

/* Reverse Linked list */
//console.log(linkedlist.reverseLinkedList())


/*****     Data Structures : Double Linked List     *****/
/* Constructor */
// let doubleLinkedList = new Doublelinkedlist(1)


/* Push */
//doubleLinkedList.pushNewNode(2)
//doubleLinkedList.pushNewNode(3)


/* Pop */
// console.log(doubleLinkedList.popNode())
// console.log(doubleLinkedList.popNode())
// console.log(doubleLinkedList.popNode())

/* unshift */
// doubleLinkedList.unshiftNode(11)
// doubleLinkedList.unshiftNode(88)


/* shift */
// console.log(doubleLinkedList.shiftNode())
// console.log(doubleLinkedList.shiftNode())
// console.log(doubleLinkedList.shiftNode())
// console.log(doubleLinkedList.shiftNode())


/* Get */
//console.log(doubleLinkedList.getNode(1))

/* Set */
//console.log(doubleLinkedList.setNode(2,100))

/* Insert */
// console.log(doubleLinkedList.insetNode(1,2))

/* Remove */
// console.log(doubleLinkedList.removeNode(1))


/*****     Data Structures : Stacks     *****/
/* Constructor */
// let stack = new Stack(1)

/* Push */
//stack.pushStack(2)
//stack.pushStack(3)

/* Pop */
//console.log(stack.popStack())


/*****     Data Structures : Queque     *****/
/* Constructor */
// let queque = new Queque(1)

/* Enqueque */
//queque.enqueque(2)
//queque.enqueque(3)

/* Dequeque */
//console.log(queque.dequeque())


/*****     Data Structures : Trees     *****/
/* Constructor */
//let bstree = new BinarySearchTree()

/* Insert */
// bstree.insertNode(47)
// bstree.insertNode(21)
// bstree.insertNode(76)
// bstree.insertNode(18)
// bstree.insertNode(52)
// bstree.insertNode(82)
// bstree.insertNode(27)

/* Contains */
//console.log(bstree.containsNode(17))

/* Minimum Value */
//console.log(bstree.minValueNode(bstree.root.right))


/*****     Data Structures : Hash Tables     *****/
/* Constructor */
let hashtable = new Hashtables()

/* Set */
hashtable.set("lumber", 70)
hashtable.set("washers", 50)
hashtable.set("bolts", 1400)

// Output
console.log(hashtable)