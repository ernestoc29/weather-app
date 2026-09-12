import { format, parseISO } from "date-fns";

export function processWeatherData(data) {
  return {
    location: data.resolvedAddress,
    temperature: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
    feelsLike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    precipitation: data.currentConditions.precip,
    pressure: data.currentConditions.pressure,
    wind: data.currentConditions.windspeed,
    icon: getWeatherIcon(data.currentConditions.icon),
    forecast: processForecast(data.days),
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

function processForecast(days) {
  return days.slice(0, 7).map((day) => {
    const date = parseISO(day.datetime);

    return {
      date: format(date, "PP"),
      dayOfWeek: format(date, "EEEE"),
      high: day.tempmax,
      low: day.tempmin,
      conditions: day.conditions,
      icon: getWeatherIcon(day.icon),
    };
  });
}
