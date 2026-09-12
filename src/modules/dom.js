export function renderWeather(data) {
  const locationDisplay = document.querySelector(".location");
  const iconDisplay = document.querySelector(".weather-icon");
  const conditionsDisplay = document.querySelector(".conditions");
  const tempDisplay = document.querySelector(".temp");
  const feelsLikeDisplay = document.querySelector(".feels-like");
  const humidityDisplay = document.querySelector(".humidity");
  const precipitationDisplay = document.querySelector(".precipitation");
  const pressureDisplay = document.querySelector(".pressure");
  const windDisplay = document.querySelector(".wind");

  locationDisplay.textContent = data.location;
  iconDisplay.textContent = data.icon;
  conditionsDisplay.textContent = data.conditions;
  tempDisplay.textContent = `${data.temperature}°`;
  feelsLikeDisplay.textContent = `Feels Like: ${data.feelsLike}°`;
  humidityDisplay.textContent = `Humidity: ${data.humidity}%`;
  precipitationDisplay.textContent = `${data.precipitation} inches`;
  pressureDisplay.textContent = `${data.pressure} inHg`;
  windDisplay.textContent = `${data.wind} mph`;
}

export function renderError(message) {
  const errorDisplay = document.querySelector(".error");
  errorDisplay.textContent = message;
}

export function clearDisplays() {
  const errorDisplay = document.querySelector(".error");
  const locationDisplay = document.querySelector(".location");
  const iconDisplay = document.querySelector(".weather-icon");
  const conditionsDisplay = document.querySelector(".conditions");
  const tempDisplay = document.querySelector(".temp");
  const feelsLikeDisplay = document.querySelector(".feels-like");
  const humidityDisplay = document.querySelector(".humidity");
  const forecastDiv = document.querySelector(".forecast");
  const precipitationDisplay = document.querySelector(".precipitation");
  const pressureDisplay = document.querySelector(".pressure");
  const windDisplay = document.querySelector(".wind");

  errorDisplay.textContent = "";
  locationDisplay.textContent = "";
  iconDisplay.textContent = "";
  conditionsDisplay.textContent = "";
  tempDisplay.textContent = "";
  feelsLikeDisplay.textContent = "";
  humidityDisplay.textContent = "";
  forecastDiv.textContent = "";
  precipitationDisplay.textContent = "";
  pressureDisplay.textContent = "";
  windDisplay.textContent = "";
}

export function renderForecast(forecast) {
  const forecastDiv = document.querySelector(".forecast");

  forecastDiv.textContent = "";

  forecast.forEach((day) => {
    const div = document.createElement("div");
    div.classList.add("forecast-card");

    const dateDisplay = document.createElement("p");
    dateDisplay.classList.add("forecast-date");
    dateDisplay.textContent = day.date;

    const dayOfWeekDisplay = document.createElement("p");
    dayOfWeekDisplay.classList.add("forecast-day");
    dayOfWeekDisplay.textContent = day.dayOfWeek;

    const iconDisplay = document.createElement("span");
    iconDisplay.classList.add("forecast-icon");
    iconDisplay.textContent = day.icon;

    const highDisplay = document.createElement("p");
    highDisplay.classList.add("forecast-high");
    highDisplay.textContent = `High: ${day.high}°`;

    const lowDisplay = document.createElement("p");
    lowDisplay.classList.add("forecast-low");
    lowDisplay.textContent = `Low: ${day.low}°`;

    const conditionsDisplay = document.createElement("p");
    conditionsDisplay.classList.add("forecast-conditions");
    conditionsDisplay.textContent = day.conditions;

    div.append(
      dayOfWeekDisplay,
      dateDisplay,
      iconDisplay,
      highDisplay,
      lowDisplay,
      conditionsDisplay,
    );

    forecastDiv.appendChild(div);
  });
}
