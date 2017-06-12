const MongoClient = require('mongodb').MongoClient;

const loadDB = (req, res, next) => {
  const connectToMongo = () => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(ROUTE, (err, db) => {
        resolve(db);
        reject(err);
      })
    })
  }

  connectToMongo()
  .then((db) => {
    req.db = db;
    next();
  }, 
  (err) => {
    return next(err);
  })
}

module.exports = loadDB;