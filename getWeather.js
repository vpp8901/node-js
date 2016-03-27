var weather = require("./weather");
var args = process.argv.slice(2);

args.forEach(parseCoordinates);
function parseCoordinates(coordinates) {
  var arr = coordinates.split(",");
  if (arr.length > 2 || arr.length < 2) {
     console.error("coordinates passed in wrong format");
  } else {
      weather.getWeather(arr[0], arr[1]);
  }
}
// weather.getWeather(42.035408,-88.282570);
