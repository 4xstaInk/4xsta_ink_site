<template>
    <div>
<video autoplay muted loop id="myVideo" width="420">
    <source src="../assets/videos/header_Trim.mp4" type="video/mp4">
  </video>
<div class="min-h-screen
" id="main">



 <carousel :autoplay="5000" :wrap-around="true" class="w-12/12" id="carousel">
    <slide v-for="data in Data" :key="data.id">

<section>
	<div class="text-white py-20">
		<div class="container mx-auto flex flex-col md:flex-row my-12 md:my-24">

			<div class="flex flex-col items-start p-8">
				<h1 class="text-5xl text-white-300 font-bold
        border-b-4
        ">{{data.name}}</h1>
				<p class="text-2xl w-8/12 text-left">
          {{data.mini_description}}
				</p>
        <router-link :to="data.link" >
				<p
					class="bg-transparent mt-5
           hover:bg-white-300 text-white-300 hover:text-black rounded shadow hover:shadow py-2 px-4 border border-white hover:bg-gray-100 cursor-pointer">
					Explore Now</p>
          </router-link>
			</div>
			<div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<!-- <div class="h-48 flex flex-wrap content-center">
					<div>
						<img class="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"></div>
						<div>
							<img class="inline-block mt-24 md:mt-0 p-8 md:p-0"  src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"></div>
							<div>
								<img class="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"></div>
							</div> -->
						</div>
					</div>
				</div>
</section>

    </slide>
    <template #addons>
    </template>
  </carousel>
</div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';


import Data from "../assets/json/Header.json";
import {mapState} from "vuex";
export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    // components

  },
    setup () {
        return {}  
    },
    data(){
      return{
        Data:Data
    }
    },
    computed:{
      
    }
}
</script> 

<style scoped>
#main{
    /* background-image: url("../assets/images/4xstaWebHeader.png");
      background-repeat: no-repeat;
  background-size: cover; */
      height: 100vh;
} 
#carousel{
padding-top:0px;
}
#carousel-image{
  transition: transform 3s;
   
}
#carousel-image:hover{
 transform: scale(1.3);
}
#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  opacity:0.4;
  min-width: 100%; 
  min-height: 100%;
}

</style>