<template>
  <div class="days-tab text-center">
    <div v-if="loading" class="loading">Loading...</div>
    <ul v-else class="p-0">
      <li v-for="day in forecast" :key="day.date" class="li-active">
        <div class="py-3">{{getDayName(day.date)}}</div>
        <div class="py-3"><img :src="day.iconUrl"></div>
        <div class="py-3">{{day.temperature}}&deg;C</div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      forecast: [],
      loading: true,
      iconUrl: null,
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = "cb40864536a118fb9d90d77583098d29";
        const city = this.cityName;
        const apiUri = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
        const response = await fetch(apiUri);
        const data = await response.json();
        const forecastData = data.list;
        const filterData = forecastData
          .map((item) => {
            return {
              date: moment(item.dt_txt.split(" ")[0]),
              temperature: Math.round(item.main.temp),
              description: item.weather[0].description,
              iconUrl: `https://api.openweathermap.org/img/w/${item.weather[0].icon}.png`,
            };
          })
          .reduce((acc, item) => {
            if (!acc.some(day => day.date.isSame(item.date, "day"))) {
              acc.push(item);
            }
            return acc;
          }, [])
          .slice(1, 5);
          this.forecast = filterData;
          this.loading = false;
        console.log("Response", forecastData);
        console.log("filterData", filterData);
      } catch (error) {
        console.error("An Api Error Occured:", error);
        this.loading = false;
      }
    },
    getDayName(date){
    return date.format('ddd')
  },
  },
  props: {
    cityName: String,
  },
  mounted() {
    this.fetchWeatherData();
  },
};
</script>

<style>
.days-tab {
  width: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  width: 90%;
  margin: auto;
}
.loading {
  color: #fff;
}
ul {
  margin: 0;
}
li {
  display: inline-block;
  list-style: none;
  height: 100%;
  width: 21%;
  max-width: 21%;
  line-height: 1;
}
span {
  display: block;
  margin-bottom: 5px;
  font: 100% sans-serif;
  height: 35px;
}
.li-active {
  background: #253d5c;
  color: #222831;
  border-radius: 10px;
  margin: 0.5rem;
  color: #fff;
  font-weight: 600;
}
.li-active:hover {
  transform: scale(1.2);
  transition: transform 0.1s ease;
}
.li-active-temp {
  display: inline-block;
  background-color: #222831;
  color: #ffffff;
  transition: background-color 0.5s;
  border-radius: 10px;
}
.li-active-temp:hover {
  transform: scale(1.2);
  transition: transform 0.1s ease;
  background: #fff;
  border-radius: 10px;
  color: #191a1f;
}
</style>
