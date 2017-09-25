/** 3.6 -- Animal Shelter
 *
 * An animal shelter, which holds only dogs and cats, operates on a 
 * strictly "first in, first out" basis. People must adopt either the
 * "oldest" (based on arrival time) of all animals at the shelter,
 * or they can select whether they would prefer a dog or a cat
 * (and will receive the oldest animal of that type).
 * They cannot select which specific animal they would like.
 * Create the data structures to maintain this system and implement
 * operations such as `enqueue`, `dequeueAny`, `dequeueDog`, `dequeueCat`.
 * You may use the LinkedList data structure.
*/

const {LinkedList} = require('../02-linked-lists/list');

function Animal(name, type) {
  this.order = 0;
  this.type = type;
  this.name = name;
  this.setOrder = function(ord) {
    this.order = ord;
  };
}

function AnimalShelter() {
  const dogs = new LinkedList();
  const cats = new LinkedList();
  let order = 0;

  this.enqueue = function(name, type) {
    const animal = new Animal(name, type);
    animal.setOrder(order);
    order++;

    if (animal.type === 'dog') {
      dogs.appendToTail(animal);
    }
    else if (animal.type === 'cat') {
      cats.appendToTail(animal);
    }
  }

  this.dequeueAny = function() {
    if (dogs.size() === 0) {
      return this.dequeueCats();
    }
    else if (cats.size() === 0) {
      return this.dequeueDogs();
    }

    const dog = dogs.peek();
    const cat = cats.peek();

    if (cat.data.order < dog.data.order) {
      return this.dequeueCats();
    }
    else if (dog.data.order < cat.data.order) {
      return this.dequeueDogs();
    }
  }

  this.dequeueDogs = function() {
    return dogs.poll();
  }

  this.dequeueCats = function() {
    return cats.poll();
  }
}
