<template>
  <div class="container p-0">
    <div class="d-flex">
      <div class="card main-div w-100">
        <div class="p-3">
          <h2 class="mb-1 day">TODAY</h2>
          <p class="text-light date mb-0">{{ date }}</p>
          <small>{{ time }}</small>
          <h2 class="place">
            <i class="fa fa-location">
              {{ cityName }} - <small> {{ country }} </small></i
            >
          </h2>
          <div class="temp">
            <h1 class="weather-temp"> {{ temperature }} </h1>
            <h2 class="text-light"> {{ description }} <img :src="iconUrl"/></h2>
          </div>
        </div>
      </div>
      <div class="card card-2 w-100">
        <table class="m-4">
          <tbody>
            <tr>
              <th>Wind Speed</th>
              <td> {{ wind }} </td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td> {{ humidity }} </td>
            </tr>
            <tr>
              <th>Visibility</th>
              <td> {{ visibility }} </td>
            </tr>
          </tbody>
        </table>
        <DaysWeather :cityName="cityName"></DaysWeather>
        <div id="div_Form" class="d-flex m-3 justify-content-center">
          <form action="">
            <input
              type="button"
              value="Change Location"
              class="btn change-btn btn-primary"
              @click="changeLocation"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import DaysWeather from "./DaysWeather.vue";
export default {
  name: "myWeather",
  components: {
    DaysWeather,
  },
  data() {
    return {
      // temperature: null,
      // description: null,
      // iconUrl: null,
      // date: null,
      // time: null,
      // name: null,
      // humidity: null,
      // wind: null,
      // country: null,
      // visibility: null,
      // cityName: this.city,
      // monthNames : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    };
  },
  computed: {
    ...mapGetters({
      date: 'formattedDate',
      time: 'formattedTime',
      temperature: 'formattedTemperature',
      iconUrl: 'formattedIconUrl',
      description: 'formattedDescription',
      wind: 'formattedWind',
      humidity: 'formattedHumidity',
      visibility: 'formattedVisibility',
      cityName: 'cityName',
      country: 'countryName',
  }),
  },
  props: {
    city: String,
  },
  methods: {
    changeLocation() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
body {
  background-color: #1a4487;
}
.weather-temp {
  margin: 0;
  font-weight: 700;
  font-size: 4em;
}
h2.mb-1.day {
  font-size: 3rem;
  font-weight: 400;
}
.main-div {
  border-radius: 20px;
  color: #fff;
  background-image: url(https://blog.stackfindover.com/wp-content/uploads/2021/05/galaxy-background-animation.jpg);
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  background-repeat: no-repeat;
  border-right: 20px;
}
.temp {
  position: absolute;
  bottom: 0;
}
.main-div:hover {
  transform: scale(1.1);
  transition: transform 0.5s ease;
  z-index: 1;
}
.card-2 {
  background-color: #212730;
  border-radius: 20px;
  margin-left: 20px;
}
.card-details {
  margin-left: 19px;
}
.h1_left {
  position: absolute;
  bottom: 25px;
  left: 16px;
  font-size: 3vw;
  line-height: 1.2;
}
.h3_left {
  position: absolute;
  left: 16px;
  font-size: 2vw;
  line-height: 0.5;
}
.h3_left small {
  font-size: 1rem;
}
table {
  position: relative;
  left: 15px;
  border-collapse: separate;
  border-spacing: 15px;
  width: 85%;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
}
th,
td {
  font-size: 18px;
  color: #fff;
}
td {
  text-align: right;
}
table,
tr:hover {
  color: red;
}
.change-btn {
  background-image: linear-gradient(to right, cyan, magenta);
}
.change-btn:hover {
  transform: scale(0.9);
}
</style>
