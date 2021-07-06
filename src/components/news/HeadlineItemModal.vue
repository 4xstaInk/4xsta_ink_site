<template>
    <div>
        <div
         id="headline-card"
         class="w-12/12 rounded material-card bg-white
        pt-5		
        overflow-x-scroll
              overflow-y-scroll
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
        ">
        <div class="font-bold text-4xl tracking-wide">{{headline_data.title}}</div>
  <img class="w-full rounded-t" :src="headline_data.urlToImage">
  <div class="px-6 py-4">
    <div class="flex">
            <mdi:earth class="text-2xl w-4 mr-2"/>
            <span class="text-2xl ml-1 antialiased">{{headline_data.source.name}}</span>
          </div>
          <div class="flex">
            <mdi:face-agent class="text-2xl w-4 mr-2" />
            <span class="text-2xl ml-1 antialiased">{{headline_data.author}}</span>
            <span v-if="headline_data.author == ''">No author available</span>
          </div>
          <div class="flex">
           <mdi:clock-outline class="text-2xl w-4 mr-2"/> 
            <span class="flex text-2xl ml-1 antialiased">{{
          moment(headline_data.publishedAt).format(
            "ddd MMM DD, YYYY [at] HH:mm a"
          )
        }}</span>
          </div>
<hr>
    <div class="text-gray-900 text-2xl font-bold mb-3">{{headline_data.description}}</div>
    <p class="text-gray-700 text-2xl">
      {{headline_data.content}}
    </p>
    
  </div>
</div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    props: ["headline_data"],
    setup () {
        

        return {}
    }
    ,
  created() {
    this.moment = moment;
  }
}
</script>

<style scoped>
#headline-background{
    background-position: center; background-repeat: no-repeat; background-size: cover;
    
}
#headline-card{
    height:700px;
}
</style>