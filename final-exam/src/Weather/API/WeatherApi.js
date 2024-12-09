const API_KEY = 'bde1336b52509910d3f3e7200b7c059c';

export const fetchWeather = (cityName) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("State not found");
      }
      return response.json();
    });
};
