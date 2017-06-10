const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/', (req, res) => {
  return res.sendFile('/index.html');
})

app.get('/:ts', (req, res) => {
  let timestamp = req.params.ts;
  res.json(parseDate(timestamp));
})

app.listen(port, () => {
  console.log(`Express server listening on port ${port}...`);
})

module.exports = app;

function parseDate(unix) {
  let timestamp;

  // Check for number or string
  if (!isNaN(unix)) {
    timestamp = unix * 1000;
  } 
  else {
    timestamp = Date.parse(unix);
  }

  // Parse out date, month, year
  let month = new Date(timestamp).getUTCMonth();
  let year = new Date(timestamp).getUTCFullYear();
  let date = new Date(timestamp).getUTCDate();

  // Build string date
  let natural = `${months[month]} ${date}, ${year}`;

  let parsed = {
    unix: (timestamp / 1000),
    natural: (Date.parse(natural)) ? natural : null
  }
  return parsed;
}