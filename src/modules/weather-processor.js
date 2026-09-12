export function processWeatherData(data) {
  return {
    location: data.address,
    temperature: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
    feelsLike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    icon: data.currentConditions.icon,
  };
}

export function convertUnit(temp) {
  const celsius = (temp - 32) * (5 / 9);
  return Number(celsius.toFixed(1));
}
