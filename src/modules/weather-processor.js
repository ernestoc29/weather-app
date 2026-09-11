export function processWeatherData(data) {
  return {
    location: data.address,
    temperature: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
    feelsLike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
  };
}
