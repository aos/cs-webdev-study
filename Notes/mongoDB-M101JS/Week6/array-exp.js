/**
 * Array Expressions
**/

// $filter
db.companies.aggregate([
  { $match: {"funding_rounds.investments.financial_org.permalink": "greylock"}},
  { $project: {
    _id: 0,
    name: 1,
    founded_year: 1, 
    rounds: { $filter: {
      input: "$funding_rounds", // Specify an array or value (using $ syntax)
      as: "round", // Specify a name
      cond: { $gte: ["$$round.raised_amount", 100000000]} // '$$' references a variable defined within the expression
    }}
  }},
  { $match: {"funding_rounds.investments.financial_org.permalink": "greylock"}}
])

// $arrayElemAt -- specify the array as the value, then specify the array and the index within the array (first one: 0, last one: -1)
// $slice -- retrieves from the array based on index (skips first, gives next # of elements)
db.companies.aggregate([
  { $match: {"founded_year": 2010} },
  { $project: {
    _id: 0,
    name: 1,
    founded_year: 1, 
    first_round: { $arrayElemAt: [ "$funding_rounds", 0]},
    last_round: { $slice: [ "$funding_rounds", 1, 3]}
  }}
]);
