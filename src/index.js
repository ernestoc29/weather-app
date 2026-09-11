import { apiCall } from "./modules/api.js";
import { processWeatherData } from "./modules/weather-processor.js";
import "./styles/styles.css";

const userInput = document.querySelector("input");
const searchBtn = document.querySelector(".search");

searchBtn.addEventListener("click", async () => {
  const data = await apiCall.getWeather(userInput.value);
  const weather = processWeatherData(data);
  console.log(weather);
});
