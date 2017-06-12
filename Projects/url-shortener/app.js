const express = require('express');
const helpers = require('./helpers');
const DB = require('./DB');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
})

app.get('/:short', (req, res) => {
  let short = req.params.short;

})

app.get('/new/*', (req, res) => {
  let url = req.params[0];

  // Test for correct URL
  let isURL = helpers.test(url);

  if (isURL) {
    let short = helpers.shorten(url);
    let result = DB.query(url, short);
    console.log('Result:', result)
    res.json(result);
  } else {
    res.json('Incorrect URL format');
  }
})

app.listen(port, () => {
  console.log('Express app listening on port %s...', port);
})

module.exports = app;