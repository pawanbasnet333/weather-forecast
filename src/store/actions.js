import axios from 'axios';

export default {
  async fetchWeatherData({ commit }, city) {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cb40864536a118fb9d90d77583098d29`);
      const weatherData = response.data;
      commit('SET_WEATHER', weatherData);
      console.log('Weather dataaaaaaaaa',weatherData)
      return true;
    } catch (error) {
      console.error('Not a valid country or city');
      return false;
    }
  }
};