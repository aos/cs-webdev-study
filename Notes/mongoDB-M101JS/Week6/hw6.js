/**
 * HW 6-1
 
  Write an aggregation query that will determine the number of unique companies with which an individual has been associated. 
**/

db.companies.aggregate( [
    { $match: { "relationships.person": { $ne: null }}},
    { $project: { name: 1, relationships: 1, _id: 0 } },
    { $unwind: "$relationships" },
    { $group: {
        _id: {person: "$relationships.person"},
        unique: {$addToSet: "$name"},
        count: {$sum: 1 }
    } },
    { $project: {
      "_id": 1,
      unique_companies: {$size: "$unique"},
      count: 1
    }},
    { $match: {"_id.person.permalink": "eric-di-benedetto"}},
    { $sort: { count: -1 } }
])

/**
 * HW 6-2
 
  There are documents for each student (student_id) across a variety of classes (class_id). Note that not all students in the same class have the same exact number of assessments. Some students have three homework assignments, etc.

  Your task is to calculate the class with the best average student performance. This involves calculating an average for each student in each class of all non-quiz assessments and then averaging those numbers to get a class average. To be clear, each student's average should include only exams and homework grades. Don't include their quiz scores in the calculation.
**/

db.grades.aggregate([
  { $match: 
    {"class_id": {$ne: null}}
  },
  { $project: { class_id: 1, scores: 1, student_id: 1, _id: 0}},
  { $unwind: "$scores"},
  { $match: 
    {"scores.type": {$ne: "quiz"}}
  },
  { $group: {
    _id: {class: "$class_id", student: "$student_id"},
    average_per_student: {$avg: "$scores.score"}
  }},
  { $group: {
    _id: {class: "$_id.class"},
    average_per_class: {$avg: "$average_per_student"}
  }},
  {$sort: { average_per_class: -1}}
])

/**
 * HW 6-3
 
  For companies in our collection founded in 2004 and having 5 or more rounds of funding, calculate the average amount raised in each round of funding. Which company meeting these criteria raised the smallest average amount of money per funding round? You do not need to distinguish between currencies. 
**/

db.companies.aggregate([
  {$match: { "founded_year": 2004}},
  {$project: {
    _id: 0, 
    name: 1,
    founded_year: 1,
    "funding_rounds.raised_amount": 1,
    num_rounds: { $size: "$funding_rounds"}}
  },
  {$match: {"num_rounds": {$gte: 5}}},
  {$unwind: "$funding_rounds"},
  {$group: {
    _id: {name: "$name"},
    average_per_round: {$avg: "$funding_rounds.raised_amount"}
  }},
  {$sort: {average_per_round: 1}}
])