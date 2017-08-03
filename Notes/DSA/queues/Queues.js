// Queue data structure
// First in, first out

module.exports = (function() {
    const items = new WeakMap(); 

    class Queue {
        constructor() {
            items.set(this, []);
        }
        enqueue(element) {
            let q = items.get(this);
            q.push(element);
        }
        dequeue() {
            let q = items.get(this);
            return q.shift();
        }
        front() {
            let q = items.get(this);
            return q[0];
        } 
        isEmpty() {
            let q = items.get(this);
            return q.length == 0;
        }
        size() {
            let q = items.get(this);
            return q.length;
        }
        print() {
            let q = items.get(this);
            console.log(q.toString());
        }
    }
    return Queue;
})();
