export const apiCall = {
  async getWeather(location) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=XKZ9CNZ4TZNL2UY6EP6NX4YCZ`,
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  },
};
