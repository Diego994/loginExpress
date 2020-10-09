require('./config/config');

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const path = require('path');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require('./routes/index'));

let renderHTML = path.resolve(__dirname, '../frontend/index.html');

app.get('/', function (req, res) {
  res.sendFile(renderHTML);
})
 
 
mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("Base de datos online");
});


app.listen(process.env.PORT, ()=> {
    console.log("port 3000");
})