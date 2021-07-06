<template>
    <div>
         <header class="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
<router-link :to="{name:'covid19'}" >
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
       <div class="flex items-center justify-center h-3/6 ">
  <div class="w-full">
          <div
           id="table"
            class="
              bg-white
              shadow-md
              rounded
              my-2
              overflow-x-scroll
              overflow-y-scroll
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
            "
          >
            <table class="w-full table-auto text-center mx-3 h-3/6 shadow-xl text-left">
              <thead>
                <tr
                  class="
                    bg-gray-200
                    text-white
                    uppercase
                    text-1xl
                    leading-normal
                  "
                >
                  <th class="py-3 px-6 text-black">Name</th>
                  <th class="py-3 px-6 text-black">Value</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-lg">
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Cases</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.cases}}</td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Today cases</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.todayCases}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Deaths</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.deaths}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Today deaths</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.todayDeaths}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Recovered</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.recovered}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Today recovered</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.todayRecovered}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Active</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.active}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Critical</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.critical}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Cases per one million</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.casesPerOneMillion}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Deaths per one million</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.deathsPerOneMillion}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Tests</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.tests}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Tests per one million</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.testsPerOneMillion}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Population</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.population}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">One case per people</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.oneCasePerPeople}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">One death per people</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.oneDeathPerPeople}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">One test per people</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.oneTestPerPeople}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Undefined</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.undefined}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Active per one million</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.activePerOneMillion}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Recovered per one million</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.recoveredPerOneMillion}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Critical per one million</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.criticalPerOneMillion}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Affected countries</td>
                  <td class="py-3 px-6 text-center">{{allCovidData.affectedCountries}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</div>
    </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    setup () {
        

        return {}
    },
    data(){
        return{
            
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
#table{
  height:500px;
  overflow: scroll;
}
</style>