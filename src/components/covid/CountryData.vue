<template>
   <div>
         <header class="flex-none flex h-16 bg-gray-100 border-t px-4 items-center">
         <img :src="country_data.countryInfo.flag"
                          :title="country_data.country"
                          class="h-7 rounded-lg mr-5"
                     />
      <h1 class="text-2xl text-black-500 font-bold mt-2">
        {{country_data.country}}
        <span class="text-red-500 font-bold mt-2">Covid-19</span> Statistics
      </h1>                          
    </header>
        <div class="flex flex-col bg-white cursor-pointer m-auto p-auto">
           <h1 class="flex text-1xl font-bold text-blue-500 pt-2 mx-4">
        <mdi:update /> Last update on
        {{
          moment(country_data.updated).format(
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
              <tbody class="text-gray-600 text-lg font-bold">
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Cases</td>
                  <td class="py-3 px-6 text-center">{{country_data.cases}}</td>
                </tr>
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Today cases</td>
                  <td class="py-3 px-6 text-center">{{country_data.todayCases}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Deaths</td>
                  <td class="py-3 px-6 text-center">{{country_data.deaths}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Today deaths</td>
                  <td class="py-3 px-6 text-center">{{country_data.todayDeaths}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Recovered</td>
                  <td class="py-3 px-6 text-center">{{country_data.recovered}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Today recovered</td>
                  <td class="py-3 px-6 text-center">{{country_data.todayRecovered}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Active</td>
                  <td class="py-3 px-6 text-center">{{country_data.active}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Critical</td>
                  <td class="py-3 px-6 text-center">{{country_data.critical}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Cases per one million</td>
                  <td class="py-3 px-6 text-center">{{country_data.casesPerOneMillion}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Deaths per one million</td>
                  <td class="py-3 px-6 text-center">{{country_data.deathsPerOneMillion}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Tests</td>
                  <td class="py-3 px-6 text-center">{{country_data.tests}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Tests per one million</td>
                  <td class="py-3 px-6 text-center">{{country_data.testsPerOneMillion}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Population</td>
                  <td class="py-3 px-6 text-center">{{country_data.population}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">One case per people</td>
                  <td class="py-3 px-6 text-center">{{country_data.oneCasePerPeople}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">One death per people</td>
                  <td class="py-3 px-6 text-center">{{country_data.oneDeathPerPeople}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">One test per people</td>
                  <td class="py-3 px-6 text-center">{{country_data.oneTestPerPeople}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Undefined</td>
                  <td class="py-3 px-6 text-center">{{country_data.undefined}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Active per one million</td>
                  <td class="py-3 px-6 text-center">{{country_data.activePerOneMillion}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Recovered per one million</td>
                  <td class="py-3 px-6 text-center">{{country_data.recoveredPerOneMillion}}</td>
                </tr>
                 <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-center">Critical per one million</td>
                  <td class="py-3 px-6 text-center">{{country_data.criticalPerOneMillion}}</td>
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
    props:["country_data"],
    setup () {
        

        return {}
    },
    created(){
       this.moment = moment;
    }
}
</script>

<style scoped>
#table{
  height:500px;
  overflow: scroll;
}
</style>