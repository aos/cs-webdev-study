const express = require('express');
const app = express();
const search = require('./router/search');
const db = require('./db');
const port = process.env.PORT || 3000;

app.use(express.static('public'));
// Load DB connection as middleware
app.use(db);

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

// Handle image search
app.use('/imagesearch', search);

// Handle history
app.use('/latest/imagesearch', (req, res) => {
  req.session.collection('history').find({}, {'_id': 0}).toArray((err, docs) => {
    res.send(docs.reverse());
  })
})

app.listen(port, () => {
  console.log('Express server listening on port %s...', port);
})
