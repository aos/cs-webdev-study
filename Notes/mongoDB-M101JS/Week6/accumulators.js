/**
 * Accumulators
**/

// In $project stages -- only within a document array
// In $group -- across multiple documents
db.companies.aggregate([
  { $match: {"funding_rounds": { $exists: true, $ne: [ ]}} },
  { $project: {
    _id: 0,
    name: 1,
    largest_round: { $max: "$funding_rounds.raised_amount"} // Create a value using the $max accumulator, finds the maximum value in the array
  }}
])