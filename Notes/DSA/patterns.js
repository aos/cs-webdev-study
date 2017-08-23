/* Minimum coin change problem

 Find the minimum number of coins needed to make a particular amount of cents using a given amount of set denominations 'd1... dn'

Given 36 cents: 1 quarter (d4), 1 dime (d3), 1 penny (d1).

Find minimum number of coines for 'n'. Must first find solution for every 'x < n'.

*/

function MinCoinChange(coins) {
  let coins = coins;
  let cache = {};

  this.makeChange = function(amount) {
    let me = this;

    if (!amount) {
      return [];
    }
    if (cache[amount]) {
      return cache[amount];
    }

    let min = [],
        newMin,
        newAmount;

    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i];
      newAmount = amount - coin;

      if (newAmount >= 0) {
        newMin = me.makeChange(newAmount);
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        console.log(`new Min ${min} for ${amount}`);
      }
    }
    return (cache[amount] = min);
  }
}

/* Knapsack problem

 Given a fixed-size knapsack with a capacity to carry 'W'
 amount of weight and a set of items that have a value
 and weight, find the best solution in a way to fill
 the knapsack with the most valuable items so that the 
 total weight is less than or equal to 'W'.

*/

function knapSack(capacity, weights, values, n) {
  let i, w, a, b, kS = [];

  for (i = 0; i <= n; i++) {
    kS[i] = [];
  }

  for (i = 0; i <= n; i++) {
    for (w = 0; w <= capacity; w++) {
      if (i == 0 || w == 0) {
        kS[i][w] = 0;
      }
      else if (weights[i - 1] <= w) {
        a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        b = kS[i - 1][w];
        kS[i][w] = (a > b) ? a : b; // Max(a, b)
      }
      else {
        kS[i][w] = kS[i - 1][w];
      }
    }
  }
  return kS[n][capacity];
}
