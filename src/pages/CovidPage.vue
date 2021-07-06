<template>
  <div>
    <div
      id="header"
      class="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
    >
      <div class="md:w-1/2">
        <p class="font-bold text-3xl uppercase">
          COVID-19 NEWS -
          <a
            href="#"
            class="
              inline-block
              rounded-full
              text-black
              ring-black ring-2
              text-3xl
              font-bold
              bg-white
              mr-1
              md:mr-2
              mb-2
              px-2
              md:px-4
              py-1
            "
          >
            WORLDWIDE
          </a>
        </p>
        <p class="text-lg font-bold">World Covid-19 Statistics</p>
        <p class="text-sm mb-10 leading-none">
          Last update -
          <!-- {{
            moment(covid_data[0]["Last Update"]).format(
              "ddd MMM DD, YYYY [at] HH:mm a"
            )
          }} -->
        </p>
      </div>
    </div>
    <AllCovidData />
    <header class="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
      <h1 class="text-2xl text-black-500 font-bold mt-2">List of Countries</h1>
    </header>
    <CovidTable />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

import CovidTable from "../components/covid/CovidTable.vue";
import AllCovidData from "../components/covid/AllCovidData.vue";
export default {
  components: {
    CovidTable,
    AllCovidData
  },
  setup() {
    return {};
  },
  data() {
    return {
   
    };
  },
  created() {
    this.moment = moment;
    window.scrollTo(0, 0);
    this.$store.dispatch('covid/fetchCountriesCovidData')
  },
  computed:{
   
  },
  methods: {
  
  },
};
</script>

<style scoped>
#header {
  background-image: url("../assets/images/health/maskup.png");
}
</style>
