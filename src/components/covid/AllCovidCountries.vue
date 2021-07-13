<template>
    <div>
      <input
        id="search"
        v-model="search"
         class="border-gray-300 border-2 mt-2 ml-2 w-6/12 rounded-lg pr-16 text-lg outline-none focus:border-white"
          type="search" name="search" placeholder="Search for country...">
<div class="section">
    <div id="sub-section" class="
            bg-white
             ml-5
             mt-5
              overflow-x-scroll
              overflow-y-scroll
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div 
        v-for="Data in filteredCountries" :key="Data"
        @click="showModal = true;
        getCountryData(Data)"
        >
            <div class="border text-center hover:bg-gray-200 cursor-pointer">
            <div>
                <img :src="Data.countryInfo.flag"
                          :title="Data.country"
                          class="h-7 mt-2 mx-auto"
                     />
            </div>
            <div>
                {{Data.country}}
            </div>
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
import CountryData from "../covid/CountryData.vue";
export default {
    components: {
        CountryData,
    },
    setup () {
        

        return {}
    },
     data() {
    return {
      showModal: false,
      country_data:'',
      search:''
    };
  },
  created() {
    this.allCountriesCovidDataLength();
  },
  computed:{
     allCountriesCovidData(){
     return this.$store.state.covid.all_countries_covid_data
    },
    // Filter method
     filteredCountries() {
       var q ='country';
       var p = this.allCountriesCovidData.filter(Data =>
        Data[q].toLowerCase().includes(this.search.toLowerCase())
      );
      return p
    }, 
  },
  methods: {
    getCountryData(Data){
      this.country_data = Data
    },
    allCountriesCovidDataLength(){
      this.mesh = this.$store.state.covid.all_countries_covid_data.length
    },
    pageChange(pageNumber){
      this.currentPage = pageNumber;
    }

  },
}
</script>

<style scoped>
#sub-section{
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  height:500px;
  background-color: white;
}
.section{
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
@media screen and (max-width: 400px) {
#sub-section{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  overflow-y: auto;
}
}

/* Modal */

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