export function renderWeather(data) {
  const locationDisplay = document.querySelector(".location");
  const iconDisplay = document.querySelector(".weather-icon");
  const conditionsDisplay = document.querySelector(".conditions");
  const tempDisplay = document.querySelector(".temp");
  const feelsLikeDisplay = document.querySelector(".feels-like");
  const humidityDisplay = document.querySelector(".humidity");

  locationDisplay.textContent = data.location;
  iconDisplay.textContent = data.icon;
  conditionsDisplay.textContent = data.conditions;
  tempDisplay.textContent = `Temperature: ${data.temperature}°`;
  feelsLikeDisplay.textContent = `Feels Like: ${data.feelsLike}°`;
  humidityDisplay.textContent = `Humidity: ${data.humidity}%`;
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

  errorDisplay.textContent = "";
  locationDisplay.textContent = "";
  iconDisplay.textContent = "";
  conditionsDisplay.textContent = "";
  tempDisplay.textContent = "";
  feelsLikeDisplay.textContent = "";
  humidityDisplay.textContent = "";
}
