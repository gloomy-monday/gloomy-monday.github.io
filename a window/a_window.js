var today = moment().format("dddd, MMMM Do");
var fullResponse = {};
var currentCode = "";
var quote = randomizeQuote();
var weather = getWeather();

// Load date & generate random quote
{
	document.getElementById("today").innerHTML = today;
	document.getElementById("quote").innerHTML = quote;
	document.getElementById("weather").innerHTML = weather;
}

function randomizeQuote() {
	const keys = Object.keys(quotes);
	randomSourceName = keys[Math.floor(Math.random() * keys.length)];
	chosenArray = quotes[randomSourceName];
	randomQuoteIndex = Math.floor(Math.random() * chosenArray.length);
	randomQuote = chosenArray[randomQuoteIndex];
	return randomQuote + "<p style='color:blue'>" + randomSourceName + "</p>";

}


function getWeather() {
var url = "https://api.open-meteo.com/v1/forecast?latitude=40.4167&longitude=-3.7033&hourly=weathercode";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      fullResponse = JSON.parse(xhr.responseText);
      console.log(fullResponse);
      currentCode = fullResponse['hourly'].weathercode[0];
      console.log(currentCode);
   }};

xhr.send();
return weather = "jojo"
};

