<template>
<div class="bg-blue-300"> 
  <div>
  <NavBar />
  <router-view />
  <FloatingButtton />
  <Footer />
</div>
  </div>
</template>

<script>  
  import NavBar from "./components/NavBar.vue";
  import Footer from "./components/Footer.vue";
  import FloatingButtton from "./components/widgets/FloatinButton.vue";




export default {
  components: {
    NavBar,
    Footer,
    FloatingButtton
  },
  data(){
    return{
      loader:true
    }
  },
  created() {
    this.$store.dispatch('covid/fetchCountriesCovidData'),
    this.$store.dispatch('covid/fetchAllCovidData')

  
  },
  computed: {
  //  allCovidData(){
  //    return this.$store.state.covid.all_covid_data
  //  }
  },
  methods: {

  }
};
</script>

<style lang="postcss">
/* img{
  width:50%;
  margin-left:80px;
}
.slide-container{
  align-content: center;
  align-items: center;
  background-color:greenyellow;
  border:2px solid white;
  border-radius:15px;
} */
  .main {
    @apply flex flex-col items-center justify-center min-h-screen space-x-4 text-6xl text-coolGray-300 font-extralight;
  }
  .title {
    @apply flex items-center justify-center;
  }
 
</style>
