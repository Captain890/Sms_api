const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Twilio = require('./twilio');
const data=require('./data');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
