function getWeather() {
	document.querySelector(".weather-info")
	.style.display="block";


	const cityName = document.querySelector("input").value;

	$.ajax({
		url:`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cce9030fcb3b710ba651351328b4a722&units=metric`,
		success: function(data){
			console.log(data);
			document.querySelector(".city-name").innerHTML = data.name;
			document.querySelector(".temp ").innerHTML = data.main.temp;
			document.querySelector(".description").innerHTML = data.weather[0].main;
			document.querySelector(".min").innerHTML = data.main.temp_min;
			document.querySelector(".max").innerHTML = data.main.temp_max;

		},
		error: function(err){
			console.log(err);
		}

	});
}