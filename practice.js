/*
const container = document.querySelector('#container');
const content = document.createElement('p');
content.textContent = "Hey I'm red!";
content.style.color = 'red';
container.appendChild(content);

const content1 = document.createElement('h3');
content1.textContent = "I'm a blue h3!";
content1.style.color = 'blue';
container.appendChild(content1);

const div = document.createElement('div');
div.style.cssText = 'border-color: black; background: pink';
const divH1 = document.createElement('h1');
divH1.textContent = "I'm in a div";
const divP = document.createElement('p');
divP.textContent = "ME TOO!"
div.appendChild(divH1);
div.appendChild(divP);
content.appendChild(div);

const btn = document.querySelector('#btn')
btn.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});

*/

/*
let arr = [];
let start = 0;
let target = 25;

for(i = 1; i <= 200; i++) {
    arr.push(i)
}
let end = arr.length -1;
function binarySearch(arr, start, end, target) {
    console.log(arr.slice(start,end));
    if(start > end) return false;
    let midIndex = Math.floor((start + end) / 2);
    if(arr[midIndex] === target) return true;

    if (arr[midIndex] > target) return binarySearch(arr, start, midIndex -1, target);
    else return binarySearch(arr, midIndex +1, end, target);
}

console.log(arr)
console.log(binarySearch(arr, start, end, target))
*/
//******************************************************************************** */

// Queue Data Structure

// const queue = [];
// queue.push('a')
// queue.push('b')
// queue.push('c')
// console.log(queue)
// queue.shift()
// console.log(queue)

// Maximally Efficient Queue should have 0(1) runtime

class QueueNode{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new QueueNode(val);
        if (this.size === 0) {
            this.front = newNode;
            this.back = newNode
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++
    }

    dequeue() {
        const removeNode = this.front;

        this.front = this.front.next
        this.size--;

        return removeNode.Val
    }
}

const myQueue = new Queue();

myQueue.enqueue('a');
myQueue.enqueue('b');
myQueue.enqueue('c');
console.log(myQueue.size);
console.log(myQueue.front)
