// Hot potato game using queues

const Queue = require('./Queues');

function hotPotato(nameList, num) {
    let queue = new Queue;

    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    let eliminated = '';
    while(queue.size() > 1) {
        // Take the first one (dequeue), and add it to the back of the circle
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();

        console.log(eliminated + ' was eliminated from the potato game!');
    }

    return queue.dequeue();
}

let winner = hotPotato(['Hoobie', 'Aos', 'Lou', 'Phin', 'Aseel'], 9);
console.log('Winner is: ', winner);
