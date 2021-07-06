<template>
  <div>
    <section class="text-gray-900 body-font">
      <div class="container px-5 py-2 mx-auto">
        <div class="font-bold text-3xl mt-5 mb-5">
          <span class="rounded-xl border text-black p-2"
            >Top Politics Headlines</span
          >
        </div>

        <div class="block lg:flex lg:space-x-2 sm:px-4 px-2">
          <div class="w-full lg:w-2/3">
          <div v-if="loader == false"> 
            <HeadlineItem :headline_all_data="headline_all_data"/>
            </div>
            <div v-if="loader == true"
            class="text-3xl font-bold text-center text-green-500 m-5 p-2"
            > 
            Loading Content...
            </div>
          </div>

          <div class="w-full lg:w-1/3 px-6">
            <PopularTopics />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

import HeadlineItem from "../news/HeadlineItem.vue";
import PopularTopics from  "../news/PopularTopics.vue";

export default {
  components: {
    HeadlineItem,
    PopularTopics
  },
  setup() {
    return {};
  },
  data(){
    return{
       headline_all_data:[],
       loader:false
    }
  },
  created() {
    this.fetchAllHeadlineData()
  },
  methods: {
    //   Fetch covid data
    fetchAllHeadlineData() {
      this.loader = true;

      const options = {
        method: "GET",
        url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=959fb167d8d04c34a038d626d7766d9f",
        headers: {
          "content-type": "application/json",
        },
      };

      axios
        .request(options)
        .then((response) => {
          (this.headline_all_data=response.data.articles);
          (this.loader = false)
        })
        .catch((error) => {
          (console.error(error));
         (this.loader = false);
        }).finally(
        
        );
    },
  },
};
</script>

<style scoped></style>
