<template>
  <div>
    <div class="overflow-x-auto">
      <div
        class="
          bg-gray-100
          flex
          items-center
          justify-center
          bg-gray-100
          font-sans
          overflow-hidden
        "
      >
        <div class="w-full">
          <div
            class="
            w-full
              bg-white
              shadow-md
              rounded
              my-2
              overflow-x-scroll
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
            "
          >
            <table class="w-11/12	table-auto text-center mt-5 mx-auto shadow-xl">
              <thead>
                <tr
                  class="
                    bg-white
                    text-white
                    uppercase
                    text-1xl
                    leading-normal
                    border
                  "
                >
                  <th class="py-3 px-6 text-black">Flag</th>
                  <th class="py-3 px-6 text-black">Name</th>
                  <th class="py-3 px-6 text-black">Cases</th>
                  <th class="py-3 px-6 text-black">Today cases</th>
                  <th class="py-3 px-6 text-black">Deaths</th>
                  <th class="py-3 px-6 text-black">Today deaths</th>
                  <th class="py-3 px-6 text-black">Recovered</th>
                  <th class="py-3 px-6 text-black">Today recovered</th>
                  <th class="py-3 px-6 text-black">Active</th>
                  <th class="py-3 px-6 text-black">Population</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-lg font-bold">
                <tr
                  v-for="data in allCountriesCovidData"
                  @click="showModal = true;getCountryData(data)"
                  :key="data" 
                  :title="'Click to view more detailed data for '+data.country"
                  class="border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                  <td class="py-3 px-6 text-center">
                    <img :src="data.countryInfo.flag"
                          :title="data.country"
                          class="h-7 rounded-lg"
                     />
                  </td>
                  <td class="py-3 px-6 text-center">{{data.country}}</td>
                  <td class="py-3 px-6 text-center">{{data.cases}}</td>
                  <td class="py-3 px-6 text-center">{{data.totalCases}}</td>
                  <td class="py-3 px-6 text-center">{{data.deaths}}</td>
                  <td class="py-3 px-6 text-center">{{data.totalDeaths}}</td>
                  <td class="py-3 px-6 text-center">{{data.recovered}}</td>
                  <td class="py-3 px-6 text-center">{{data.totalRecovered}}</td>
                  <td class="py-3 px-6 text-center">{{data.active}}</td>
                  <td class="py-3 px-6 text-center">{{data.population}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade" appear>
    <div class="modal-overlay" 
         v-if="showModal" 
         @click="showModal = false"></div>
  </transition>
  <transition name="pop" appear>
    <div class="modal" 
         role="dialog" 
         v-if="showModal"
         >
        <CountryData :country_data = "country_data"/>
        <div class="mt-5">
        <span 
        @click="showModal = false" 
        class="text-2xl border rounded-lg bg-gray-200 p-2 my-5 cursor-pointer hover:bg-gray-100">CLOSE</span></div>
        
        </div>
  </transition>

  </div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

import CountryData from "./CountryData.vue";

export default {
  components: {
    CountryData,
  },
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      showModal: false,
      country_data:'',
      currentPage:1,
      total:222,
      // length
      perPage:10,
      mesh:''
    };
  },
  created() {
    this.allCountriesCovidDataLength();
  },
  computed:{
     allCountriesCovidData(){
     return this.$store.state.covid.all_countries_covid_data
    },
  },
  methods: {
    getCountryData(data){
      this.country_data = data
    },
    allCountriesCovidDataLength(){
      this.mesh = this.$store.state.covid.all_countries_covid_data.length
    },
    pageChange(pageNumber){
      this.currentPage = pageNumber;
    }

  },
};
</script>

<style scoped>

html {
  height: 100%;
  background: #FFF;
  color: #000;
  font-size: 62.5%;
}

body {
  min-height: 100%;
  margin: 0;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
}

.button {
  border: none;
  color: #FFF;
  background: #42b983;
  appearance: none;
  font: inherit;
  font-size: 1.8rem;
  padding: .5em 1em;
  border-radius: .3em;
  cursor: pointer;
}

.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: 100%;
  height: fit-content;
  max-width: 95%;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #FFF;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: '';
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
