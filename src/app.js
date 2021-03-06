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

// Forecast days

let currentDate = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let secondDay = document.querySelector(".second-weather");
let secondWeather = currentDate.getDay() + 2;
let thirdDay = document.querySelector(".third-weather");
let thirdWeather = currentDate.getDay() + 3;

let fourthDay = document.querySelector(".fourth-weather");
let fourthWeather = currentDate.getDay() + 4;

let fifthDay = document.querySelector(".fifth-weather");
let fifthWeather = currentDate.getDay() + 5;

if (currentDate.getDay() === 2) {
  secondDay.innerHTML = days[secondWeather];
  thirdDay.innerHTML = days[thirdWeather];
  fourthDay.innerHTML = days[fourthWeather];
  fifthDay.innerHTML = days[0];
} else {
  if (currentDate.getDay() === 3) {
    secondDay.innerHTML = days[secondWeather];
    thirdDay.innerHTML = days[thirdWeather];
    fourthDay.innerHTML = days[0];
    fifthDay.innerHTML = days[1];
  } else {
    if (currentDate.getDay() === 4) {
      secondDay.innerHTML = days[secondWeather];
      thirdDay.innerHTML = days[0];
      fourthDay.innerHTML = days[1];
      fifthDay.innerHTML = days[2];
    } else {
      if (currentDate.getDay() === 5) {
        secondDay.innerHTML = days[0];
        thirdDay.innerHTML = days[1];
        fourthDay.innerHTML = days[2];
        fifthDay.innerHTML = days[3];
      } else {
        if (currentDate.getDay() === 6) {
          secondDay.innerHTML = days[1];
          thirdDay.innerHTML = days[2];
          fourthDay.innerHTML = days[3];
          fifthDay.innerHTML = days[4];
        } else {
          secondDay.innerHTML = days[secondWeather];
          thirdDay.innerHTML = days[thirdWeather];
          fourthDay.innerHTML = days[fourthWeather];
          fifthDay.innerHTML = days[fifthWeather];
        }
      }
    }
  }
}

function showForecast(response) {
  console.log(response.data);
  let maxTemp1 = document.querySelector(".max-temp1");
  maxTemp1.innerHTML = Math.round(response.data.daily[1].temp.max);
  let minTemp1 = document.querySelector(".min-temp1");
  minTemp1.innerHTML = Math.round(response.data.daily[1].temp.min);
  let maxTemp2 = document.querySelector(".max-temp2");
  maxTemp2.innerHTML = Math.round(response.data.daily[2].temp.max);
  let minTemp2 = document.querySelector(".min-temp2");
  minTemp2.innerHTML = Math.round(response.data.daily[2].temp.min);
  let maxTemp3 = document.querySelector(".max-temp3");
  maxTemp3.innerHTML = Math.round(response.data.daily[3].temp.max);
  let minTemp3 = document.querySelector(".min-temp3");
  minTemp3.innerHTML = Math.round(response.data.daily[3].temp.min);
  let maxTemp4 = document.querySelector(".max-temp4");
  maxTemp4.innerHTML = Math.round(response.data.daily[4].temp.max);
  let minTemp4 = document.querySelector(".min-temp4");
  minTemp4.innerHTML = Math.round(response.data.daily[4].temp.min);
  let maxTemp5 = document.querySelector(".max-temp5");
  maxTemp5.innerHTML = Math.round(response.data.daily[5].temp.max);
  let minTemp5 = document.querySelector(".min-temp5");
  minTemp5.innerHTML = Math.round(response.data.daily[5].temp.min);
  let iconElement1 = document.querySelector("#icon1");
  iconElement1.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`
  );
  let iconElement2 = document.querySelector("#icon2");
  iconElement2.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`
  );
  let iconElement3 = document.querySelector("#icon3");
  iconElement3.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`
  );
  let iconElement4 = document.querySelector("#icon4");
  iconElement4.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`
  );
  let iconElement5 = document.querySelector("#icon5");
  iconElement5.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`
  );
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
  windElement.innerHTML = Math.round(response.data.wind.speed * 3.6);
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
  let apiKey = "cf76ec6bfd9d3c2ea4f7240c87482c39";
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&exclude=hourly,minutely`;
  axios.get(apiUrlForecast).then(showForecast);
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
search("Burgos");
