module.exports = function Stack() {
  const items = [];

  // Push an item to the top of the stack
  this.push = function(data) {
    items.push(data);
  }

  // Return item at the top of the stack
  this.pop = function() {
    if (this.isEmpty()) return null;

    return items.pop();
  }

  // Look at item at the top of the stack
  this.peek = function() {
    return items[items.length - 1];
  }

  this.isEmpty = function() {
    return items.length === 0;
  }
}
