const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req,res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req,res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = "Your BMI is " + (weight/(Math.pow(height,2)));
  res.send(result);
});

app.listen(3000, () => {
  console.log("Server running in port number 3000");
});
