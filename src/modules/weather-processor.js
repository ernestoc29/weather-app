export function processWeatherData(data) {
  return {
    location: data.address,
    temperature: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
    feelsLike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    icon: getWeatherIcon(data.currentConditions.icon),
  };
}

export function convertUnit(temp) {
  const celsius = (temp - 32) * (5 / 9);
  return Number(celsius.toFixed(1));
}

function getWeatherIcon(icon) {
  const icons = {
    "clear-day": "☀️",
    "clear-night": "🌙",

    cloudy: "☁️",

    "partly-cloudy-day": "🌤️",
    "partly-cloudy-night": "☁️🌙",

    fog: "🌫️",
    wind: "💨",

    rain: "🌧️",
    "showers-day": "🌦️",
    "showers-night": "🌧️",

    snow: "❄️",
    "snow-showers-day": "🌨️",
    "snow-showers-night": "🌨️",

    sleet: "🌨️",
    hail: "🧊",

    "rain-snow": "🌨️",
    "rain-snow-showers-day": "🌨️",
    "rain-snow-showers-night": "🌨️",

    thunder: "⛈️",
    "thunder-rain": "⛈️",
    "thunder-showers-day": "⛈️",
    "thunder-showers-night": "⛈️",
  };

  return icons[icon] || "🌡️";
}
