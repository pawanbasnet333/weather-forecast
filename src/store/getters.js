export default {
    formattedDate: state => state.date,
    formattedTime: state => state.time,
    formattedTemperature: state => `${state.temperature}°`,
    formattedIconUrl: state => state.iconUrl,
    formattedDescription: state => state.description,
    formattedWind: state => `${state.wind} Km/s`,
    formattedHumidity: state => `${state.humidity} RH`,
    formattedVisibility: state => `${state.visibility} m`,
    cityName: state => state.name,
    countryName: state => state.country
  };
  