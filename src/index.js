import { apiCall } from "./modules/api.js";
import {
  renderWeather,
  renderError,
  clearDisplays,
  renderForecast,
  showEmptyState,
  hideEmptyState
} from "./modules/dom.js";
import {
  convertUnit,
  processWeatherData,
} from "./modules/weather-processor.js";
import "./styles/styles.css";

let currentUnit = "f";
let currentWeather;

const userInput = document.querySelector("input");
const searchBtn = document.querySelector(".search");

const switchBtn = document.querySelector(".switch");

async function fetchData() {
  if (!userInput.value.trim()) return;

  currentUnit = "f";
  switchBtn.textContent = "C";

  clearDisplays();
  hideEmptyState()

  try {
    const data = await apiCall.getWeather(userInput.value);
    const weather = processWeatherData(data);
    currentWeather = weather;

    renderWeather(weather);
    renderForecast(weather.forecast);

    console.log(weather);

    return weather;
  } catch (error) {
    renderError(error.message);
    showEmptyState()
  }
}

userInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    await fetchData();
  }
});

searchBtn.addEventListener("click", fetchData);

switchBtn.addEventListener("click", () => {
  if (!currentWeather) return;

  let displayWeather;

  if (currentUnit === "f") {
    displayWeather = { ...currentWeather };

    displayWeather.temperature = convertUnit(currentWeather.temperature);
    displayWeather.feelsLike = convertUnit(currentWeather.feelsLike);

    displayWeather.forecast = currentWeather.forecast.map((day) => ({
      ...day,
      high: convertUnit(day.high),
      low: convertUnit(day.low),
    }));

    switchBtn.textContent = "F";
    currentUnit = "c";
  } else {
    displayWeather = currentWeather;

    switchBtn.textContent = "C";
    currentUnit = "f";
  }

  renderWeather(displayWeather);
  renderForecast(displayWeather.forecast);
});

showEmptyState();