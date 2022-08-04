const openmeteo = "https://api.open-meteo.com/v1/forecast?latitude=40.4167&longitude=-3.7033&hourly=weathercode";
var currentCode = "";
var fullResponse = {};
var currentWeather = "";
var timeOf = timeof()

// Load date & generate random quote
{
	document.getElementById("today").innerHTML = moment().format("dddd, MMMM Do");
	document.getElementById("quote").innerHTML = randomizeQuote();
}

// Random quote generator
function randomizeQuote() {
	const keys = Object.keys(quotes);
	randomSourceName = keys[Math.floor(Math.random() * keys.length)];
	chosenArray = quotes[randomSourceName];
	randomQuoteIndex = Math.floor(Math.random() * chosenArray.length);
	randomQuote = chosenArray[randomQuoteIndex];
	return randomQuote + "<p id='source'>" + randomSourceName + "</p>";

}

// Fetch & display weather data
fetch(openmeteo)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayWeather(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayWeather (data){
	const currentWeatherCode = data['hourly'].weathercode[0];
	console.log(currentWeatherCode);
	if (currentWeatherCode <= 4) {
		document.getElementById("layer2").innerHTML ="";
			return currentWeather = "sunny";
	};
	if ( (currentWeatherCode > 4 && currentWeatherCode <= 35) || (currentWeatherCode >= 40 && currentWeatherCode <= 49) ) {
		document.getElementById("layer2").innerHTML ="<img src='cloudy.png'>";
		return currentWeather = "cloudy";
	};
	if ( (currentWeatherCode >= 36 && currentWeatherCode <=39) || (currentWeatherCode >= 70 && currentWeatherCode <= 79) ) {
		document.getElementById("layer2").innerHTML ="<img src='snowy.png'>";
		return currentWeather = "snowy";
	};
	if ( (currentWeatherCode >= 50 && currentWeatherCode <= 69)  || (currentWeatherCode >= 80 && currentWeatherCode <= 94) ){
		document.getElementById("layer2").innerHTML ="<img src='rainy.png'>";
		return currentWeather = "rainy";
	};
	if (currentWeatherCode >= 95 && currentWeatherCode <= 99) {
		document.getElementById("layer2").innerHTML ="<img src='stormy.png'>";
		return currentWeather = "stormy";
	};
};

// What time is it?

function timeof(){
	var hour = moment().format("hA");
	console.log(hour);
	switch(hour){
		case "10PM":
		case "11PM":
		case "12AM":
		case "1AM":
		case "2AM":
		case "3AM":
		case "4AM":
		case "5AM":
			document.getElementById("layer1").innerHTML ="<img src='night.png'>";
			return "night";
			break;
		case "6AM":
		case "7AM":
		case "8AM":
			document.getElementById("layer1").innerHTML ="<img src='dawn.png'>";
			return "dawn";
			break;
		case "9AM":
		case "10AM":
		case "11AM":
			document.getElementById("layer1").innerHTML ="<img src='morning.png'>";
			return "morning";
			break;
		case "12PM":
		case "1PM":
		case "2PM":
		case "3PM":
			document.getElementById("layer1").innerHTML ="<img src='noon.png'>";
			return "noon";
			break;
		case "4PM":
		case "5PM":
		case "6PM":
		case "7PM":
			document.getElementById("layer1").innerHTML ="<img src='afternoon.png'>";
			return "afternoon";
			break;
		case "8PM":
		case "9PM":
			document.getElementById("layer1").innerHTML ="<img src='sunset.png'>";
			return "sunset";
			break;

			break;
		default:
			return "I don't know"
	}
}




