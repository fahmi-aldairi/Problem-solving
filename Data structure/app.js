//////////////   Q-1 (Implement a function that returns the minimum element in a stack in constant time complexity.)

// class Stack {
//   constructor() {
//     this.items = [];
//     this.minEle = [];
//   }

//   push(element) {
//     this.items.push(element);
//     if (
//       this.minEle.length === 0 ||
//       element <= this.minEle[this.minEle.length - 1]
//     ) {
//       this.minEle.push(element);
//     }
//   }

//   pop() {
//     let pEle = this.minEle[this.minEle.length - 1];
//     if (pEle === this.minEle[this.minEle.length - 1]) {
//       this.minEle.pop();
//       this.items.pop();
//     }
//   }

//   print() {
//     console.log(this.items);
//     console.log(this.minEle);
//   }

//   getMin() {
//     console.log(this.minEle[this.minEle.length - 1]);
//   }
// }

// let sta1 = new Stack();

// sta1.push(10);
// sta1.push(5);
// sta1.push(20);
// sta1.push(3);

// sta1.getMin();
// sta1.print();

// sta1.pop();
// sta1.print();
// sta1.getMin();

//////////////   Q-2 (Given a queue of integers, reverse the order of the elements in the queue.)

// class Queue {
//   constructor() {
//     this.items = [];
//     this.revItems = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     return this.items.shift();
//   }

//   print() {
//     console.log(this.items);
//   }
//   rev() {
//     let y = this.items;
//     console.log(y.reverse());
//   }
// }

// let nQueue = new Queue();

// nQueue.enqueue(10);
// nQueue.enqueue(20);
// nQueue.enqueue(30);

// nQueue.print();

// nQueue.dequeue();
// nQueue.print();

// nQueue.rev();

// nQueue.enqueue(60);
// nQueue.print();
// nQueue.rev();

//////////////   Q-3 (Implement a Queue using 2 stacks s1 and s2.)

// class StackQ3 {
//   constructor() {
//     this.items = [];
//     this.count = 0;
//   }

//   // add element to top of the stack
//   push(element) {
//     this.items[this.count] = element;
//     this.count++;
//     console.log(`${element} added to ${this.count}`);
//     return this.count - 1;
//   }

//   // print elements
//   print() {
//     return this.items;
//   }
// }

// const stack1 = new StackQ3();
// const stack2 = new StackQ3();

// stack1.push(100);
// stack1.push(200);
// stack1.push(300);
// let s1 = stack1.print();

// stack2.push(400);
// stack2.push(500);
// stack2.push(600);
// let s2 = stack2.print();

// // queue elements
// class QueueQ3 {
//   constructor() {
//     this.items = [];
//     this.frontIndex = 0;
//     this.backIndex = 0;
//   }
//   queue(item) {
//     this.items.push.apply(this.items, item);
//     this.backIndex++;
//     return item + " inserted";
//   }

//   printQueue() {
//     return this.items;
//   }
// }
// const queueQ3 = new QueueQ3();

// console.log(queueQ3.queue(s1));
// console.log(queueQ3.queue(s2));

// console.log(queueQ3.printQueue());

////////////   Q-4 (Create a function that takes a LinkedList and deletes the middle node in it and returns it.)

// class Node {
//   constructor(value, loction) {
//     this.value = value;
//     this.next = null;
//     this.loction = loction;
//   }
// }

// class Linkedlist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   add(value) {
//     let newNode = new Node(value);
//     if (this.head == null) {
//       this.head = newNode;
//       this.tail = newNode;
//       newNode.loction = 1;
//     } else {
//       newNode.loction = this.tail.loction + 1;
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.size++;
//   }

//   delete() {
//     let position = parseInt(this.size / 2) + 1;
//     let preNode = this.head;
//     let valueDelet;
//     while (preNode) {
//       if (preNode.loction == position - 1) {
//         valueDelet = preNode.next.value;
//         preNode.next = preNode.next.next;
//         this.size--;
//         return valueDelet;
//       }
//       preNode = preNode.next;
//     }
//   }
// }

// let list = new Linkedlist();
// list.add(7);
// list.add(8);
// list.add(9);
// list.add(10);
// list.add(11);
// list.add(12);
// console.log(list);
// console.log(list.delete());

////////////   Q-5 (Create a function that takes a LinkedList and reverses it.)
class Node {
  constructor(value, loction) {
    this.value = value;
    this.next = null;
    this.loction = loction;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    let newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.loction = 1;
    } else {
      newNode.loction = this.tail.loction + 1;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  revers() {
    let firstNode = this.head;
    let arr = [];
    let i = 0;
    while (firstNode) {
      arr[i++] = firstNode.value;
      firstNode = firstNode.next;
    }
    let reNode = this.head;
    while (reNode) {
      reNode.value = arr.pop();
      reNode = reNode.next;
    }
  }
}

let list = new Linkedlist();
list.add(7);
list.add(8);
list.add(9);
list.add(10);
list.add(11);
list.add(12);
console.log(list);
list.revers();
