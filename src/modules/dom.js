export function renderWeather(data) {
  const locationDisplay = document.querySelector(".location");
  const tempDisplay = document.querySelector(".temp");
  const conditionsDisplay = document.querySelector(".conditions");
  const feelsLikeDisplay = document.querySelector(".feels-like");
  const humidityDisplay = document.querySelector(".humidity");

  locationDisplay.textContent = data.location;
  tempDisplay.textContent = `Temperature: ${data.temperature}°`;
  conditionsDisplay.textContent = `Conditions: ${data.conditions}`;
  feelsLikeDisplay.textContent = `Feels Like: ${data.feelsLike}°`;
  humidityDisplay.textContent = `Humidity: ${data.humidity}%`;
}
