function formatDate(time) {
  let date = new Date(time);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${hours}`;
  }

  return `${day}, ${hours}:${minutes}`;
}

function showTemperature(response) {
  console.log(response.data);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  celsius = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let realFeelElement = document.querySelector("#realfeel");
  realFeelElement.innerHTML = Math.round(response.data.main.feels_like);
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function searchLocation(position) {
  let apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showCurrent(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function showFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (celsius * 9) / 5 + 32;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(fahrenheitTemperature);
  celsiusLink.classList.remove("activation");
  fahrenheitLink.classList.add("activation");
}

function showCelsiusTemperature(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = celsius;
  celsiusLink.classList.add("activation");
  fahrenheitLink.classList.remove("activation");
}

function showMadridTemperature(event) {
  event.preventDefault();
  let madridElement = document.querySelector(".madrid");
  search(madridElement.innerHTML);
}

function showParisTemperature(event) {
  event.preventDefault();
  let parisElement = document.querySelector(".paris");
  search(parisElement.innerHTML);
}

function showNewYorkTemperature(event) {
  event.preventDefault();
  let newYorkElement = document.querySelector(".new-york");
  search(newYorkElement.innerHTML);
}

function showMilanTemperature(event) {
  event.preventDefault();
  let milanElement = document.querySelector(".milan");
  search(milanElement.innerHTML);
}

function showBordeauxTemperature(event) {
  event.preventDefault();
  let bordeauxElement = document.querySelector(".bordeaux");
  search(bordeauxElement.innerHTML);
}

function showBerlinTemperature(event) {
  event.preventDefault();
  let berlinElement = document.querySelector(".berlin");
  search(berlinElement.innerHTML);
}

let celsius = null;
search("Burgos");
let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", showCurrent);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemperature);

let madridTemperature = document.querySelector(".madrid");
madridTemperature.addEventListener("click", showMadridTemperature);

let parisTemperature = document.querySelector(".paris");
parisTemperature.addEventListener("click", showParisTemperature);

let newYorkTemperature = document.querySelector(".new-york");
newYorkTemperature.addEventListener("click", showNewYorkTemperature);

let milanTemperature = document.querySelector(".milan");
milanTemperature.addEventListener("click", showMilanTemperature);

let bordeauxTemperature = document.querySelector(".bordeaux");
bordeauxTemperature.addEventListener("click", showBordeauxTemperature);

let berlinTemperature = document.querySelector(".berlin");
berlinTemperature.addEventListener("click", showBerlinTemperature);
