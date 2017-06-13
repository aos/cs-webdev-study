const express = require('express');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 3000;
const upload = multer({ dest: 'uploads/' })

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.post('/get-file-size', upload.single('file'), (req, res) => {
  console.log(req.file)
  res.json({size: req.file.size})
})

app.listen(port, () => {
  console.log('Express server listening on port %s...', port);
})