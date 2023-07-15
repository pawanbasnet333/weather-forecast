export default {
    SET_WEATHER(state, weatherData) {
      state.temperature = Math.round(weatherData.main.temp);
      state.description = weatherData.weather[0].description;
      state.name = weatherData.name;
      state.iconUrl = `https://api.openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  
      const d = new Date();
      state.date = `${d.getDate()}-${state.monthNames[d.getMonth()]}-${d.getFullYear()}`;
      state.time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  
      state.wind = weatherData.wind.speed;
      state.humidity = weatherData.main.humidity;
      state.country = weatherData.sys.country;
      state.visibility = weatherData.visibility;
    }
  };  