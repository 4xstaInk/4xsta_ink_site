<template>
    <div title="Click to view more detail data">
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
        <AllCovidDataModal />
        <div class="mt-5">
        <span 
        @click="showModal = false" 
        class="text-2xl border rounded-lg bg-gray-200 p-2 my-5 cursor-pointer hover:bg-gray-100">CLOSE</span></div>
        </div>
  </transition>

         <header class="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
             <router-link :to="{name:'covid19'}">
      <h1 class="text-2xl text-black-500 font-bold mt-2">
        World
        <span class="text-red-500 font-bold mt-2">Covid-19</span> Statistics
      </h1>
      </router-link>
    </header>
        <div class="flex flex-col bg-white cursor-pointer m-auto p-auto">
      <h1 class="flex text-1xl font-bold text-blue-500 pt-2 mx-4">
        <mdi:update /> Last update on
        {{
          moment(allCovidData.updated).format(
            "ddd MMM DD, YYYY [at] HH:mm a"
          )
        }}
      </h1>
        <div
        @click="showModal = true"
        class="
          flex
          overflow-x-scroll
          py-2
          pb-5
          scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
          items-center
          justify-center
          curson-pointer
        "
      >
        <div class="flex flex-nowrap text-center ml-10 gap-2">
          <div class="inline-block">
            <div
              id="world-statistics"
              class="
                px-2
                py-2
                bg-white
                w-30
                h-30
                max-w-xs
                overflow-hidden
                rounded-lg
                bg-white
                border
                hover:shadow-xl
                transition-shadow
                duration-300
                ease-in-out
              "
            >
              <h3 class="text-1xl px-2 rounded border bg-gray-100">
                Cases
              </h3>
              <h3 class="py-2 text-1xl font-bold font-mono">
             {{allCovidData.cases}}
              </h3>
            </div>
          </div>

          <div class="inline-block">
            <div
              id="world-statistics"
              class="
                 px-2
                py-2
                bg-white
                w-30
                h-30
                max-w-xs
                overflow-hidden
                rounded-lg
                bg-white
                border
                hover:shadow-xl
                transition-shadow
                duration-300
                ease-in-out
              "
            >
              <h3 class="text-1xl px-2 rounded border bg-gray-100">
                Today cases
              </h3>
              <h3 class="py-2 text-1xl font-bold font-mono">
             {{allCovidData.todayCases}}
              </h3>
            </div>
          </div>

          <div class="inline-block">
            <div
              id="world-statistics"
              class="
                 px-2
                py-2
                bg-white
                w-30
                h-30
                max-w-xs
                overflow-hidden
                rounded-lg
                bg-white
                border
                hover:shadow-xl
                transition-shadow
                duration-300
                ease-in-out
              "
            >
              <h3 class="text-1xl px-2 rounded border bg-gray-100">
                Deaths
              </h3>
              <h3 class="py-2 text-1xl font-bold font-mono">
             {{allCovidData.deaths}}
              </h3>
            </div>
          </div>

          <div class="inline-block">
            <div
              id="world-statistics"
              class="
                 px-2
                py-2
                bg-white
                w-30
                h-30
                max-w-xs
                overflow-hidden
                rounded-lg
                bg-white
                border
                hover:shadow-xl
                transition-shadow
                duration-300
                ease-in-out
              "
            >
              <h3 class="text-1xl px-2 rounded border bg-gray-100">
                Today deaths
              </h3>
              <h3 class="py-2 text-1xl font-bold font-mono">
             {{allCovidData.todayDeaths}}
              </h3>
            </div>
          </div>

          <div class="inline-block">
            <div
              id="world-statistics"
              class="
                  px-2
                py-2
                bg-white
                w-30
                h-30
                max-w-xs
                overflow-hidden
                rounded-lg
                bg-white
                border
                hover:shadow-xl
                transition-shadow
                duration-300
                ease-in-out
              "
            >
              <h3 class="text-1xl px-2 rounded border bg-gray-100">
                Recovered
              </h3>
              <h3 class="py-2 text-1xl font-bold font-mono">
             {{allCovidData.recovered}}
              </h3>
            </div>
          </div>

           <div class="inline-block">
            <div
              id="world-statistics"
              class="
                 px-2
                py-2
                bg-white
                w-30
                h-30
                max-w-xs
                overflow-hidden
                rounded-lg
                bg-white
                border
                hover:shadow-xl
                transition-shadow
                duration-300
                ease-in-out
              "
            >
              <h3 class="text-1xl px-2 rounded border bg-gray-100">
                Today recovered
              </h3>
              <h3 class="py-2 text-1xl font-bold font-mono">
             {{allCovidData.todayRecovered}}
              </h3>
            </div>
          </div>
         
          <div class="inline-block">
            <div
              id="world-statistics"
              class="
                 px-2
                py-2
                bg-white
                w-30
                h-30
                max-w-xs
                overflow-hidden
                rounded-lg
                bg-white
                border
                hover:shadow-xl
                transition-shadow
                duration-300
                ease-in-out
              "
            >
              <h3 class="text-1xl px-2 rounded border bg-gray-100">
                Active
              </h3>
              <h3 class="py-2 text-1xl font-bold font-mono">
             {{allCovidData.active}}
              </h3>
            </div>
          </div>

           <div class="inline-block">
            <div
              id="world-statistics"
              class="
                  px-2
                py-2
                bg-white
                w-30
                h-30
                max-w-xs
                overflow-hidden
                rounded-lg
                bg-white
                border
                hover:shadow-xl
                transition-shadow
                duration-300
                ease-in-out
              "
            >
              <h3 class="text-1xl px-2 rounded border bg-gray-100">
                Population
              </h3>
              <h3 class="py-2 text-1xl font-bold font-mono">
             {{allCovidData.population}}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import moment from "moment";

import AllCovidDataModal from "./AllCovidDataModal.vue";

export default {
    components:{
        AllCovidDataModal
    },
    setup () {
        

        return {}
    },
    data(){
        return{
            showModal: false
        }
    },
  created() {
    this.moment = moment;
  },
    computed:{
        allCovidData(){
            return this.$store.state.covid.all_covid_data
        }
    }
}
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