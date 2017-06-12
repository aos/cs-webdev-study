const express = require('express');
const app = express();
const search = require('./router/search');
// const history = require('./router/history');
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Middleware example
app.use((req, res, next) => {
  console.log('Hi from this middleware!');
  console.log(req.ip)
  next();
})

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

// Handle GET request from /imagesearch
app.use('/imagesearch', search);

// Handle history
// app.use('/latest/imagesearch', history.routes);

app.listen(port, () => {
  console.log('Express server listening on port %s...', port);
})
