/**
 * $unwind
 * 
 * Takes documents as input that have array value fields and produces one output document for each element in the array
**/

// This query:
db.companies.aggregate([
  { $match: {"funding_rounds.investments.financial_org.permalink": "greylock"},
   $project: {
     _id: 0,
     name: 1,
     amount: "$funding_rounds.raised_amount",
     year: "$funding_rounds.funded_year"
   }}
])

// Produces this result:
/*
  {
    "name": "WildTangent",
    "amount": [
      200000,
      130000,
      170000,
      350000
    ],
    "year": [2007, 2006, 2000, 2001]
  }
*/

// Running $unwind:
db.companies.aggregate([
  {$match: {"funding_rounds.investments.financial_org.permalink": "greylock"}},
  {$unwind: "$funding_rouncs"},
  {$project: {
     _id: 0,
     name: 1,
     amount: "$funding_rounds.raised_amount",
     year: "$funding_rounds.funded_year"
   }}
])

// Produces: 
/*
  {
    "name": "WildTangent", "amount": 200000, "year": 2007
  },
  {
    "name": "WildTangent", "amount": 130000, "year": 2006
  }
*/