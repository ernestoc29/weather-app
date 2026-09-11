export const apiCall = {
  async getWeather(location) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=XKZ9CNZ4TZNL2UY6EP6NX4YCZ`,
    );

    if (!response.ok) {
      throw new Error("Unable to find location");
    }

    const data = await response.json();
    return data;
  },
};
