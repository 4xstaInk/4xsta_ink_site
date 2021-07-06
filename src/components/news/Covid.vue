<template>
    <div>
<section class="body-font p-5 bg-gray-900 mx-auto my-2">
        <div class="mx-auto flex px-8  md:flex-row flex-col items-center jobcard">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            
            <figure class="visible">
          
                            <div class="">
                              
                                <div class="pt-10 px-2 sm:px-6 ">
                                <span class="inline-block py-1 px-2 rounded-full bg-red-600  text-xs font-bold tracking-widest mb-2">Notice</span>
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Covid-19
              <br class="hidden lg:inline-block" />
              <small class="text-gray-400">Corona virus</small>
            </h1>
                                    <p class="text-indigo-200 text-base pb-6">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.<br> 
<a href="https://www.who.int/health-topics/coronavirus#tab=tab_1" target="_blank" class="text-yellow-500">Click to read more</a></p>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center pb-12">
                                            <div class="h-12 w-12">
                                                <img src="../../assets/images/health/coronavirus.jpg"
                                                 alt class="h-full w-full object-cover overflow-hidden rounded-full" />
                                            </div>
                                            <router-link :to="{name:'covid19'}" 
                                            target="-top"
                                            class="text-white font-bold border rounded-xl px-2 bg-blue-500 ml-3">
                                            Click for more <span class="text-red-300 font-bold">covid-19</span> detailed statistics.
                                            </router-link>
                                        </div>
                              
                                    </div>
                                </div>
                            </div>
                        </figure>
        
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:block hidden">
            <img class="object-cover object-center rounded" alt="hero" src="../../assets/images/health/coronavirus.jpg" />
          </div>
        </div>
       <AllCovidData />
      </section>
        </div>
</template>

<script>
import AllCovidData from "../covid/AllCovidData.vue";
export default {
  components: {
    AllCovidData,
  },
    setup () {
        return {}
    }
}
</script>

<style scoped>

</style>