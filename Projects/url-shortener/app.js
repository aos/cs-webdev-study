const mongo = require('mongodb').MongoClient;
const express = require('express');
const app = express();
require('dotenv').config({path: './key.env'});
const helpers = require('./helpers')


const port = process.env.PORT || 3000;
const ROUTE = process.env.ROUTE;
app.use(express.static('public'));

const connectToMongo = () => {
  return new Promise((resolve, reject) => {
    mongo.connect(ROUTE, (err, db) => {
      resolve(db);
      reject(err);
    })
  })
}

connectToMongo()
.then(
  function fulfilled(db) {
    console.log('Successfully connected to MongoDB');

    app.get('/', (req, res) => {
      res.sendFile('/index.html');
    })

    // Get URL to shorten
    app.get('/new/*', (req, res) => {
      let url = req.params[0];
      let short = helpers.shorten(url);
      let isURL = helpers.test(url); 

      // Test for correct URL
      if (isURL) {
        db.collection('shorts').findOne({short: short})
        .then(function(result) {

          // If not found in DB, insert
          if (!result) {
            db.collection('shorts').insertOne({short: short, url: url})
            .then(function(inserted) {
              console.log(`Inserted [${url}] @ ${short}`)
              // res.ops[0] is the inserted objected 
              console.log('Inserted document:', inserted.ops[0]);
              return res.json({
                'original_url': url,
                'short_url': `${req.protocol}://${req.get('host')}/${short}`
              });
            }, function(err) {
              console.log(err);
            })
          }
          // Else spit out found URL
          else {
            console.log(`Found [${url}] @ ${short}`);
            // `res` here is the result of finding the object
            console.log(result);
            return res.json({
              'original_url': url,
              'short_url': `${req.protocol}://${req.get('host')}/${short}`
            });
          }
        },
        function(err) {
          console.log(err);
        });
      }
      else {
        res.json({error: 'Sorry... invalid URL format. Make sure you have a valid protocol (http/https) and a working site.'});
      }
    });

    // Redirect to website from generated short URL
    app.get('/:short', (req, res) => {
      let short = +req.params.short;
      db.collection('shorts').findOne({short: short})
      .then(function(result) {
        console.log(result);
        return res.redirect(result.url);
      }, 
      function(err) {
        console.log(err);
      })
    })

    app.use(helpers.errorHandler);

    app.listen(port, () => {
      console.log('Express app listening on port %s...', port);
    })
  },
  // Handle promise rejection
  function rejected(err) {
    console.log(err);
  }
)