import { apiCall } from "./modules/api.js";
import { renderWeather, renderError, clearDisplays } from "./modules/dom.js";
import { processWeatherData } from "./modules/weather-processor.js";
import "./styles/styles.css";

const userInput = document.querySelector("input");
const searchBtn = document.querySelector(".search");

async function fetchData() {
  if (!userInput.value.trim()) return;

  clearDisplays();

  try {
    const data = await apiCall.getWeather(userInput.value);
    const weather = processWeatherData(data);
    renderWeather(weather);
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
