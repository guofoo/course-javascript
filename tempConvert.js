var BASE_SCALE = 32;   // FILL IN YOUR ANSWER HERE

function celsiusToFahrenheit(celsius) {
  var celsiusInF = (celsius*9)/5 + BASE_SCALE;
  console.log(celsius + '°C is ' + celsiusInF + '°F');
  return celsiusInF;
}

function fahrenheitToCelsius(fahrenheit) {
  var fahrenheitInC = ((fahrenheit - BASE_SCALE) *5)/9;
  console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
  return fahrenheitInC;
}
