<template>
		<div class="bg-white w-12/12">
<div class="flex flex-wrap">
	<Headline />
	</div>
	<Covid />
		</div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

import Covid from "../components/news/Covid.vue";
import Headline from "../components/news/Headlines.vue";
import PoliticsHeadline from "../components/news/Headlines.vue";

import Data from "../assets/json/News.json";
export default {
		components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
		// components
		Covid,
		Headline,
		PoliticsHeadline
	},
		setup () {


				return {}
		},
		data() {
		return {
			openTab: 1,
			Data:Data
		}
	},
		methods: {
		toggleTabs: function(tabNumber){
			this.openTab = tabNumber
		}
	}
}
</script>

<style scoped>

</style>