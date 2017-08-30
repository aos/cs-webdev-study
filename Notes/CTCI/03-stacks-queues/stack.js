module.exports = function Stack() {
  const items = [];

  this.push = function(data) {
    items.push(data);
  }

  this.pop = function() {
    return items.pop();
  }

  this.peek = function() {
    return items[items.length - 1];
  }

  this.isEmpty = function() {
    return items.length === 0;
  }
}
