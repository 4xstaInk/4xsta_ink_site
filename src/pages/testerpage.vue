<template>
   <div>
<!-- <header class="dark:bg-gray-800">
    <div class="container flex flex-col px-2 space-y-6 md:h-128
    mx:auto md:flex-row md:items-center md:space-x-6">
        <div class="flex flex-col items-center w-full md:flex-row md:w-2/2">
          
            <div class="max-w-lg md:mx-12 md:order-2">
                <h1 class="text-3xl font-bold tracking-wide text-gray-800 dark:text-white md:text-3xl">{{data.name}}</h1>
                <h1 class="text-2xl tracking-wide text-gray-800 dark:text-white md:text-2xl">"{{data.mini_description}}"</h1>
                <div class="mt-6">
                  <router-link 
                  :to="data.link"
                  >
                    <p
                    v-on:click="toggleTabs(Number(data.tab_click))"
                     class="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400 cursor-pointer">Click to view {{data.name}}</p>
                     </router-link>
                </div>
            </div>
        </div>

        <div class="flex items-center justify-center w-full h-96 md:w-1/2">
            <p class="object-cover w-full h-full max-w-2xl rounded-md"
            id="carousel-image"
             alt="apple watch photo">
             </p>
        </div>
    </div>
</header> -->

<div class="flex flex-row h-screen bg-gray-100">

  <div class="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
    <div class="flex flex-col mx-auto w-11/12">
      <div class="flex-none h-20 flex flex-row justify-between items-center p-5">
        <div class="flex flex-col space-y-1">
          <strong class="flex"><mdi:account /> <span class="ml-2">Nikola Tesla</span></strong>
        </div>
      </div>

      <div
        class="flex-auto overflow-y-auto p-5 space-y-4"
        
      >
        <div class="flex flex-row space-x-2">
          <div class="flex flex-col">
              <div class="flex text-sm text-gray-600 mr-auto"><mdi:account /> Name</div>
            <div class="bg-white rounded-tr-3xl rounded-br-3xl rounded-bl-3xl p-5 border">
              Some message text
            </div>
            <div class=" flex text-sm text-gray-600 mt-2"><mdi:clock-outline /><span class="ml-2">4 hrs ago</span></div>
          </div>
        </div>

        

        <div class="flex flex-row space-x-2 flex-row-reverse space-x-reverse w-100">
          <div class="flex flex-col">
              <div class="flex text-sm text-sky-600 ml-auto"><mdi:account /> Name</div>
            <div class="bg-sky-100  rounded-tl-3xl rounded-bl-3xl rounded-br-3xl p-5 border p-5 w-50 overflow-auto
 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ">
              Some message text Some message text Some message text Some message text Some message text Some message text Some message text Some message text Some message text Some message text Some message text 
            </div>
            <div class="flex text-sm text-gray-600 mt-2">
            <mdi:clock-outline /><span class="ml-2">4 hrs ago</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-none h-40 p-4 pt-5" id="textarea-container">
          <form>
        <textarea 
        id="textarea"
        class="w-full h-full outline-none focus:border-sky-600 hover:border-sky-600 rounded-3xl p-4 shadow-lg" v-model="textarea"></textarea>
        <button 
        id="button"
        :class="(textarea == '' ? 'hidden':'text-green-600')" class="text-3xl float-right" type="submit"><mdi:send /></button>
        </form>
      </div>
    </div>

  </div>
</div>
   </div>
</template>

<script>
import axios from "axios";


export default {
    components: {
     
    },
    setup () {
        
        return {}
    },
    data() {
        return {
            textarea:''
      
        };
    },
    methods: {
       
        }
    }

</script>

<style scoped>
#textarea-container{
    position:relative
}
#textarea{
    width:100%;
    height: 100%;
    box-sizing: border-box;
}
#button{
    position: absolute;
    top:100;
    left:50;
}
</style>