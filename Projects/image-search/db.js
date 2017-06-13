const MongoClient = require('mongodb').MongoClient;
require('dotenv').config({path: 'key.env'});

const loadDB = (req, res, next) => {
  const connectToMongo = () => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(process.env.ROUTE, (err, db) => {
        resolve(db);
        reject(err);
      })
    })
  }
  connectToMongo()
  .then(function(db) {
    req.session = db;
    console.log('Connected to DB');
    next();
  }, 
  (err) => {
    return next(err);
  })
}

module.exports = loadDB;