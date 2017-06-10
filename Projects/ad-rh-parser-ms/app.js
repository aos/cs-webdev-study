const express = require('express');
const app = express();
const port = process.env.port || 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
})

app.get('/api/whoami', (req, res) => {

  // IP address
  let ip = req.ip.replace(/^:[a-fA-F0-9]*:*[a-fA-F0-9]*:/g, "")

  // Language
  let language = req.header('Accept-Language').match(/(^[a-z]*-[A-Z]*)/g)[0];

  // Software
  let software = req.header('User-Agent')
  .match(/\(.*?\)/g)[0].replace(/[()]/g, "");

  let response = {
    ipaddress: ip,
    language: language,
    software: software
  }

  res.json(response);
})

app.listen(port, () => {
  console.log(`Express server listening on port ${port}...`);
});

module.exports = app;