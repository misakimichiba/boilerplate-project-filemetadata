const express = require('express')
const bodyParser = require('body-parser')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// /api/fileanalyse

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res) {
  // var fileName = req.file.originalname;
  res.json({ name: req.file.originalname, type: req.file.mimetype, size: req.file.size});
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
