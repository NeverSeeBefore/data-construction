class Stack {
    arr = [];

    push(v) {
        return this.arr.push(v)
    }

    pop() {
        return this.arr.pop();
    }
}

class Queue {
    arr = [];

    push(v) {
        return this.arr.push(v)
    }

    pop() {
        return this.arr.shift();
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.arr);
stack.pop();
console.log(stack.arr);
stack.pop();
console.log(stack.arr);
stack.pop();
console.log(stack.arr);

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.arr);
queue.pop();
console.log(queue.arr);
queue.pop();
console.log(queue.arr);
queue.pop();
console.log(queue.arr);