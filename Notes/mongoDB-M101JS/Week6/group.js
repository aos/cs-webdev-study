/**
 * $group stage
 * 
 * Aggregate together values of multiple documents and perform operations on them
**/

db.companies.aggregate([
  { $group: {
    // _id is what the group stage uses to organize the documents it sees
    // Takes all documents that have the same value for '$founded_year' and groups them
    _id: { founded_year: "$founded_year" },
    average_number_of_employees: { $avg: "$number_of_employees" }
  }},
  { $sort: {average_number_of_employees: -1}}
])