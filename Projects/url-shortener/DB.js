const mongo = require('mongodb').MongoClient;

const connectToMongo = () => {
  return new Promise((resolve, reject) => {
    mongo.connect('mongodb://localhost:27017/shorten-url', (err, db) => {
      resolve(db);
      reject(err);
    })
  })
}

exports.query = (url, short) => {
  connectToMongo()
  .then(
    function fulfilled(db) {
      console.log('Successfully connected to MongoDB');

      db.collection('shorts').findOne({short: short})
      .then(function(res) {

        if (!res) {
          db.collection('shorts').insertOne({short: short, url: url})
          .then(function(res) {
            console.log(`Inserted [${url}] @ ${short}`)
            // res.ops[0] is the inserted objected 
            console.log('Inserted document:', res.ops[0]);
            return res.ops[0];
          }, function(err) {
            console.log(err);
          })
        }
        else {
          console.log(`Found [${url}] @ ${short}`);
          // `res` here is the result of finding the object
          console.log(res);
          return res;
        }

      }, function(err) {
        console.log(err);
      })
    }, 
    function rejected(err) {
      console.log(err);
    }
  )
}