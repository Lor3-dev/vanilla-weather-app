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

// let currentDate = new Date();

// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let secondDay = document.querySelector(".second-weather");
// let secondWeather = currentDate.getDay() + 2;
// let thirdDay = document.querySelector(".third-weather");
// let thirdWeather = currentDate.getDay() + 3;

// let fourthDay = document.querySelector(".fourth-weather");
// let fourthWeather = currentDate.getDay() + 4;

// let fifthDay = document.querySelector(".fifth-weather");
// let fifthWeather = currentDate.getDay() + 5;

// if (currentDate.getDay() === 2) {
//   secondDay.innerHTML = days[secondWeather];
//   thirdDay.innerHTML = days[thirdWeather];
//   fourthDay.innerHTML = days[fourthWeather];
//   fifthDay.innerHTML = days[0];
// } else {
//   if (currentDate.getDay() === 3) {
//     secondDay.innerHTML = days[secondWeather];
//     thirdDay.innerHTML = days[thirdWeather];
//     fourthDay.innerHTML = days[0];
//     fifthDay.innerHTML = days[1];
//   } else {
//     if (currentDate.getDay() === 4) {
//       secondDay.innerHTML = days[secondWeather];
//       thirdDay.innerHTML = days[0];
//       fourthDay.innerHTML = days[1];
//       fifthDay.innerHTML = days[2];
//     } else {
//       if (currentDate.getDay() === 5) {
//         secondDay.innerHTML = days[0];
//         thirdDay.innerHTML = days[1];
//         fourthDay.innerHTML = days[2];
//         fifthDay.innerHTML = days[3];
//       } else {
//         if (currentDate.getDay() === 6) {
//           secondDay.innerHTML = days[1];
//           thirdDay.innerHTML = days[2];
//           fourthDay.innerHTML = days[3];
//           fifthDay.innerHTML = days[4];
//         } else {
//           secondDay.innerHTML = days[secondWeather];
//           thirdDay.innerHTML = days[thirdWeather];
//           fourthDay.innerHTML = days[fourthWeather];
//           fifthDay.innerHTML = days[fifthWeather];
//         }
//       }
//     }
//   }
// }
// let maxTemperature1 = null;
// let minTemperature1 = null;
// let maxTemperature2 = null;
// let minTemperature2 = null;
// let maxTemperature3 = null;
// let minTemperature3 = null;
// let maxTemperature4 = null;
// let minTemperature4 = null;
// let maxTemperature5 = null;
// let minTemperature5 = null;
// function showForecast(response) {
//   console.log(response.data);
//   let maxTemp1 = document.querySelector(".max-temp1");
//   let minTemp1 = document.querySelector(".min-temp1");
//   let maxTemp2 = document.querySelector(".max-temp2");
//   let minTemp2 = document.querySelector(".min-temp2");
//   let maxTemp3 = document.querySelector(".max-temp3");
//   let minTemp3 = document.querySelector(".min-temp3");
//   let maxTemp4 = document.querySelector(".max-temp4");
//   let minTemp4 = document.querySelector(".min-temp4");
//   let maxTemp5 = document.querySelector(".max-temp5");
//   let minTemp5 = document.querySelector(".min-temp5");
//   maxTemperature1 = Math.round(response.data.daily[1].temp.max);
//   minTemperature1 = Math.round(response.data.daily[1].temp.min);
//   maxTemperature2 = Math.round(response.data.daily[2].temp.max);
//   minTemperature2 = Math.round(response.data.daily[2].temp.min);
//   maxTemperature3 = Math.round(response.data.daily[3].temp.max);
//   minTemperature3 = Math.round(response.data.daily[3].temp.min);
//   maxTemperature4 = Math.round(response.data.daily[4].temp.max);
//   minTemperature4 = Math.round(response.data.daily[4].temp.min);
//   maxTemperature5 = Math.round(response.data.daily[5].temp.max);
//   minTemperature5 = Math.round(response.data.daily[5].temp.min);
//   maxTemp1.innerHTML = maxTemperature1;
//   minTemp1.innerHTML = minTemperature1;
//   maxTemp2.innerHTML = maxTemperature2;
//   minTemp2.innerHTML = minTemperature2;
//   maxTemp3.innerHTML = maxTemperature3;
//   minTemp3.innerHTML = minTemperature3;
//   maxTemp4.innerHTML = maxTemperature4;
//   minTemp4.innerHTML = minTemperature4;
//   maxTemp5.innerHTML = maxTemperature5;
//   minTemp5.innerHTML = minTemperature5;
//   let iconElement1 = document.querySelector("#icon1");
//   iconElement1.setAttribute(
//     "src",
//     `https://openweathermap.org/img/wn/${response.data.daily[1].weather[0].icon}@2x.png`
//   );
//   let iconElement2 = document.querySelector("#icon2");
//   iconElement2.setAttribute(
//     "src",
//     `https://openweathermap.org/img/wn/${response.data.daily[2].weather[0].icon}@2x.png`
//   );
//   let iconElement3 = document.querySelector("#icon3");
//   iconElement3.setAttribute(
//     "src",
//     `https://openweathermap.org/img/wn/${response.data.daily[3].weather[0].icon}@2x.png`
//   );
//   let iconElement4 = document.querySelector("#icon4");
//   iconElement4.setAttribute(
//     "src",
//     `https://openweathermap.org/img/wn/${response.data.daily[4].weather[0].icon}@2x.png`
//   );
//   let iconElement5 = document.querySelector("#icon5");
//   iconElement5.setAttribute(
//     "src",
//     `https://openweathermap.org/img/wn/${response.data.daily[5].weather[0].icon}@2x.png`
//   );
// }

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

  //   let fahrenheitTemperatureMax1 = (maxTemperature1 * 9) / 5 + 32;
  //   let fahrenheitTemperatureMin1 = (minTemperature1 * 9) / 5 + 32;
  //   let fahrenheitTemperatureMax2 = (maxTemperature2 * 9) / 5 + 32;
  //   let fahrenheitTemperatureMin2 = (minTemperature2 * 9) / 5 + 32;
  //   let fahrenheitTemperatureMax3 = (maxTemperature3 * 9) / 5 + 32;
  //   let fahrenheitTemperatureMin3 = (minTemperature3 * 9) / 5 + 32;
  //   let fahrenheitTemperatureMax4 = (maxTemperature4 * 9) / 5 + 32;
  //   let fahrenheitTemperatureMin4 = (minTemperature4 * 9) / 5 + 32;
  //   let fahrenheitTemperatureMax5 = (maxTemperature5 * 9) / 5 + 32;
  //   let fahrenheitTemperatureMin5 = (minTemperature5 * 9) / 5 + 32;
  //   let maxTemp1 = document.querySelector(".max-temp1");
  //   let minTemp1 = document.querySelector(".min-temp1");
  //   let maxTemp2 = document.querySelector(".max-temp2");
  //   let minTemp2 = document.querySelector(".min-temp2");
  //   let maxTemp3 = document.querySelector(".max-temp3");
  //   let minTemp3 = document.querySelector(".min-temp3");
  //   let maxTemp4 = document.querySelector(".max-temp4");
  //   let minTemp4 = document.querySelector(".min-temp4");
  //   let maxTemp5 = document.querySelector(".max-temp5");
  //   let minTemp5 = document.querySelector(".min-temp5");
  //   maxTemp1.innerHTML = Math.round(fahrenheitTemperatureMax1);
  //   minTemp1.innerHTML = Math.round(fahrenheitTemperatureMin1);
  //   maxTemp2.innerHTML = Math.round(fahrenheitTemperatureMax2);
  //   minTemp2.innerHTML = Math.round(fahrenheitTemperatureMin2);
  //   maxTemp3.innerHTML = Math.round(fahrenheitTemperatureMax3);
  //   minTemp3.innerHTML = Math.round(fahrenheitTemperatureMin3);
  //   maxTemp4.innerHTML = Math.round(fahrenheitTemperatureMax4);
  //   minTemp4.innerHTML = Math.round(fahrenheitTemperatureMin4);
  //   maxTemp5.innerHTML = Math.round(fahrenheitTemperatureMax5);
  //   minTemp5.innerHTML = Math.round(fahrenheitTemperatureMin5);

  let forecastMax = document.querySelectorAll(".max-temp");
  forecastMax.forEach(function (i) {
    let currentTemp = i.innerHTML;
    i.innerHTML = Math.round((currentTemp * 9) / 5 + 32);
  });

  let forecastMin = document.querySelectorAll(".min-temp");
  forecastMin.forEach(function (i) {
    let currentTemp = i.innerHTML;
    i.innerHTML = Math.round((currentTemp * 9) / 5 + 32);
  });
  celsiusLink.addEventListener("click", showCelsiusTemperature);
  fahrenheitLink.removeEventListener("click", showFahrenheitTemperature);
  celsiusLink.classList.remove("activation");
  fahrenheitLink.classList.add("activation");
}

function showCelsiusTemperature(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = celsius;

  let forecastMax = document.querySelectorAll(".max-temp");
  forecastMax.forEach(function (i) {
    let currentTemp = i.innerHTML;
    i.innerHTML = Math.round(((currentTemp - 32) * 5) / 9);
  });

  let forecastMin = document.querySelectorAll(".min-temp");
  forecastMin.forEach(function (i) {
    let currentTemp = i.innerHTML;
    i.innerHTML = Math.round(((currentTemp - 32) * 5) / 9);
  });
  //   let maxTemp1 = document.querySelector(".max-temp1");
  //   let minTemp1 = document.querySelector(".min-temp1");
  //   let maxTemp2 = document.querySelector(".max-temp2");
  //   let minTemp2 = document.querySelector(".min-temp2");
  //   let maxTemp3 = document.querySelector(".max-temp3");
  //   let minTemp3 = document.querySelector(".min-temp3");
  //   let maxTemp4 = document.querySelector(".max-temp4");
  //   let minTemp4 = document.querySelector(".min-temp4");
  //   let maxTemp5 = document.querySelector(".max-temp5");
  //   let minTemp5 = document.querySelector(".min-temp5");
  //   maxTemp1.innerHTML = maxTemperature1;
  //   minTemp1.innerHTML = minTemperature1;
  //   maxTemp2.innerHTML = maxTemperature2;
  //   minTemp2.innerHTML = minTemperature2;
  //   maxTemp3.innerHTML = maxTemperature3;
  //   minTemp3.innerHTML = minTemperature3;
  //   maxTemp4.innerHTML = maxTemperature4;
  //   minTemp4.innerHTML = minTemperature4;
  //   maxTemp5.innerHTML = maxTemperature5;
  //   minTemp5.innerHTML = minTemperature5;
  celsiusLink.removeEventListener("click", showCelsiusTemperature);
  fahrenheitLink.addEventListener("click", showFahrenheitTemperature);
  celsiusLink.classList.add("activation");
  fahrenheitLink.classList.remove("activation");
}

//Forecast
function formatDay(time) {
  let date = new Date(time);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date.getDay()];
}

function showForecast(response) {
  console.log(response.data);
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;

  for (let i = 0; i < 5; i++) {
    let forecast = response.data.daily[i];

    forecastElement.innerHTML += `<div class="card border mx-1 mb-2 forecast-card">
              <div class="card-body">
                <h5 class="card-title text-center forecast">${formatDay(
                  forecast.dt * 1000
                )}</h5>
                <img src="https://openweathermap.org/img/wn/${
                  forecast.weather[0].icon
                }@2x.png" alt="${forecast.weather[0].description}" id="icon1" />
                <p class="card-text text-center">
                  <span class="max-temp">${Math.round(
                    forecast.temp.max
                  )}</span>º/<span
                    class="min-temp"
                  >${Math.round(forecast.temp.min)}</span
                  >º
                </p>
              </div>
            </div>
            </div>`;
  }
}

//List of cities on the top
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
