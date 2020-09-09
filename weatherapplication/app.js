const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

const apiKey = "1bf4a72d562d739d56724f734c10fd77";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const units = "metric";


app.get('/', (req,res) => {
  console.log('Server running on port number 3000');
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req,res) => {
  const cityName = req.body.cityName;
  var fullPath = apiUrl + "?appid=" + apiKey + "&q=" + cityName + "&units=" +units;
  https.get(fullPath, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const imgUrl = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
      res.write("<h1>Weather Details</h1>");
      res.write("<div>Current temperature at " +cityName+ " is " +weatherData.main.temp+" degree celsius</div>");
      res.write("<div>Description: " + weatherData.weather[0].description + "</div>");
      res.write("<img src=" +imgUrl+ ">")
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("Server running in port number 3000");
});
