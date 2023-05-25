const convertToCelsius = function(fahrenheit) {

//x °F ≘ (x − 32) × 5/9 °C
let convertedToCelsius = (fahrenheit-32) * (5/9);

return Number(convertedToCelsius.toFixed(1));

};

const convertToFahrenheit = function(celsius) {

//x °C ≘ (x × 9/5 + 32) °F
let convertedToFahrenheit = (celsius*(9/5)+32)

return Number(convertedToFahrenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
