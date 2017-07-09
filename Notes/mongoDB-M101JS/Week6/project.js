/**
 * $project - intro to reshaping
**/

// Promote nested fields
db.companies.aggregate([
  { $match: {"funding_rounds.investments.financial_org.permalink": "greylock"} },
  { $project: {
    _id: 0,
    name: 1,
    ipo: "$ipo.pub_year", // '$' means give value
    valuation: "$ipo.valuation_amount",
    funders: "$funding_rounds.investments.financial_org.permalink"
  } }
]);

// Example 2 -- Creating a nested document from top-level fields
db.companies.aggregate([
  { $match: {"funding_rounds.investments.financial_org.permalink": "greylock"} },
  { $project: {
    _id: 0,
    name: 1,
    founded: { // Create a nested document on project
      year: "$founded_year",
      month: "$founded_month",
      day: "$founded_day"
    }
  } }
]);

