var https = require("https");
//private forecast api key
var key = "xxx-xxx-xxxx";

function printError(error) {
  console.error(error.message);
}

function printWeather(place, temperature) {
  console.log("The temperature in " + place + " is " + temperature);
}

function getWeather(latitude,longitude) {
  var request = https.get("https://api.forecast.io/forecast/"+key+"/" + latitude +"," + longitude, function(response){
    var body = "";
    response.on("data", function(chunk){
      body += chunk;
    });
    response.on("end", function() {
      if (response.statusCode === 200) {
        try{
          var weather = JSON.parse(body);
          printWeather(weather.timezone, weather.currently.temperature);
        } catch (error) {
          printError(error);
        }
      } else {
        printError({message: "There was an error getting the forecast"});
      }
    });
    response.on("error",printError);
  });


}


module.exports.getWeather = getWeather;
