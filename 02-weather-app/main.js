const apiKey = "4c373eb410cc6df98827745076fd6d2d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=doha";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = data.main.temp;
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind").innerHTML = data.wind.speed;
}

checkWeather();
