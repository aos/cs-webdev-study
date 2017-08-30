module.exports = function Queue() {
  const items = [];

  this.add = function(data) {
    items.push(data);
  }

  this.remove = function() {
    return items.shift();
  }

  this.peek = function() {
    return items[0];
  }

  this.isEmpty = function() {
    return items.length === 0;
  }
}
