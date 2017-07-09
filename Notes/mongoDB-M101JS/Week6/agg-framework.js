/**
 * Chapter 6 - Aggregation framework

A pipeline

Each stage is a data processing unit

**/

//*** Example

// Pass in an aggregation pipeline (an array of stages)
db.companies.aggregate([
  { $match: { founded_year: 2004 }}, // '$match' is exactly like 'find'
  { $sort: {name: 1} }, // Sort by name ascending
  { $skip: 10 },
  { $limit: 5 },
  { $project: {
    _id: 0,
    name: 1,
    founded_year: 1
  }}
])

// Take care the order of stages in the pipeline
