const Queue = require('./Queues');

// Min priority queue (0 - highest priority)
// Elements are added and removed based on a priority

function PriorityQueue() {
    let items = [];
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority) {
        let queueElement = new QueueElement(element, priority)

        let added = false;
        for (let i = 0; i < items.length; i++) {
            // If priority is lower (thus more urgent, add before item[i])
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        // If priority is higher than everything else (thus least urgent),
        // or no elements in queue
        // append to end
        if (!added) {
            items.push(queueElement);
        }
    };

    this.print = function() {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    }

    // All other methods same as default queue
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Aos", 2);
priorityQueue.enqueue("Lou", 1);
priorityQueue.enqueue("Phin", 1);
priorityQueue.print();
