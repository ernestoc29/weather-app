import { apiCall } from "./modules/api.js";
import { renderWeather, renderError, clearDisplays } from "./modules/dom.js";
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
  currentUnit = "f";
  switchBtn.textContent = "C"; 

  if (!userInput.value.trim()) return;

  clearDisplays();

  try {
    const data = await apiCall.getWeather(userInput.value);
    const weather = processWeatherData(data);
    currentWeather = { ...weather };
    renderWeather(weather);
    console.log(weather)
    return weather;
  } catch (error) {
    renderError(error.message);
  }
}

userInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    await fetchData();
  }
});

searchBtn.addEventListener("click", fetchData);

switchBtn.addEventListener("click", () => {
  if (currentUnit === "f") {
    const displayWeather = { ...currentWeather };
    const tempC = convertUnit(currentWeather.temperature);
    const feelsLikeC = convertUnit(currentWeather.feelsLike);

    displayWeather.temperature = tempC;
    displayWeather.feelsLike = feelsLikeC;

    switchBtn.textContent = "F";
    currentUnit = "c";
    renderWeather(displayWeather);
  } else {
    switchBtn.textContent = "C";
    currentUnit = "f";
    renderWeather(currentWeather);
  }
});