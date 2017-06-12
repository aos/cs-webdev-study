const routes = require('express').Router();
require('dotenv').config({path: 'key.env'});

connectToMongo()
.then((db) => {

  const saveToDB = (history) => {
    db.collection('history').insertOne({term: history.term, when: history.when})
  }

  routes.get('/', (req, res) => {
    db.collection('history').findAll({})
    .then((results) => {
      return res.send(results);
    })
  })

},
// Handle promise rejection
(err) => {
  console.log(err);
})

module.exports = {
  routes,
  save: saveToDB
}