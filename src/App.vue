<template>
  <div class="app">
    <div class="header container h-100 p-5">
      <h1 class="mb-5" ref="appHeading">Weather App</h1>
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar w-50 mx-2">
          <input
            type="text"
            class="input form-control"
            placeholder="Enter a City"
            v-model="city"
            ref="focus"
          />
        </div>
        <button class="btn-search btn btn-primary" @click="searchWeather">
          Search <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
    <!-- <weather :city="city" v-if="showWeather"></weather> -->
    <weather
      :city="city"
      @validData="handleValidData"
      v-if="showWeather"
    ></weather>
    <invalid v-if="validData"></invalid>
  </div>
</template>

<script>
import Weather from "./components/Weather.vue";
import Invalid from "./components/Invalid.vue";
import Typed from "typed.js";

export default {
  name: "App",
  components: {
    Weather,
    Invalid,
  },
  data() {
    return {
      city: "",
      showWeather: false,
      validData: false,
    };
  },
  methods: {
    async searchWeather() {
      if (this.city.trim() ==  '') {
    this.validData = true;
    this.showWeather = false;
  } else {
    await this.$store.dispatch('fetchWeatherData', this.city);
    this.validData = false;
    this.showWeather = true;
  }
    },
    startTypingAnimation() {
      const options = {
        strings: ["World Weather Forecast"],
        typeSpeed: 150, // Speed of typing in milliseconds
        showCursor: false, // Hide the cursor
        onComplete: () => {
          //if you want to execute any code after completion
        },
      };
      const animateText = () => {
        //Reset Text before repeating, if we don't do this text will not display properly
        const headingElement = this.$refs.appHeading;
        headingElement.textContent = "";
        new Typed(this.$refs.appHeading, options);
        this.animationTimeout = setTimeout(() => {
          window.requestAnimationFrame(animateText); // Repeat animation
        }, 10000);
      };
      animateText();
    },
    handleValidData(valid) {
      this.validData = valid;
    },
  },
  mounted() {
    this.$refs.focus.focus();
    this.startTypingAnimation();
  },
  beforeUnmount() {
    clearTimeout(this.animationTimeout);
  },
  // async created() {
  //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=8331cdef4f10633c84fd856ce65588b0`);
  //     this.weatherData = await response.json();
  //     console.log("responseeeeee",response)
  //   }
};
</script>

<style>
body {
  background-color: #121212 !important;
}
.d-flex {
  margin-top: 20px;
}
.header {
  background-color: #212730;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  font-family: cursive;
  margin-top: 40px;
}
.btn-search {
  background-image: linear-gradient(to right, cyan, magenta);
}
.btn-search:hover {
  transform: scale(0.9);
  box-shadow: 0 0 0 2em rgba(#fff, 0);
}
.mb-5 {
  min-height: 50px; /*to prevent to change the dive height when intitilizing the header text */
  color: #d209e5;
}
.input.form-control {
  border-color: #d209e5;
  color: #d209e5;
}
</style>
