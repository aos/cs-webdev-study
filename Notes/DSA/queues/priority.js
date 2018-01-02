// Min priority queue (0 - highest priority)
// Elements are added and removed based on a priority

export function PriorityQueue() {
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
    // or no elements in queue -- append to end
    if (!added) {
      items.push(queueElement);
    }
  };

  this.dequeue = function() {
    if (items.length === 0) {
      throw new Error('Queue empty.')
    }
    else {
      return items.shift();
    }
  }

  this.isEmpty = function() {
    return items.length === 0;
  }

  this.print = function() {
    for (let i = 0; i < items.length; i++) {
      console.log(`${items[i].element} - ${items[i].priority}`);
    }
  }

  this.size = function() {
    return items.length;
  }
}
