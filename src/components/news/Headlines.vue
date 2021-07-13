<template>
  <div>
    <section class="text-gray-900 body-font">
      <div class="container px-5 py-2 w-12/12">
        <div class="text-3xl mt-5 mb-5 px-auto">
          <span class="font-bold rounded-xl border text-black p-2"
            >Top  Headlines</span>
          <span 
          v-if="headline_total > 0"
          class="rounded-xl border text-black p-2 ml-2">{{headline_total}}<small class="font-sm ml-2">articles</small></span>
        </div>
        
       
        <!-- Search key word -->
        <h1 class="flex block text-2xl font-medium text-gray-700">Search for keyword</h1>
        <input
        id="search"
        @keyup="fetchAllHeadlineData"
        v-model="search_text"
         class="border-gray-300 border-2  w-6/12 rounded-lg pr-16 text-lg outline-none focus:border-white"
          type="search" name="search" placeholder="Search...">
<!-- End search key word -->


<!-- Select Country -->
<Listbox as="div" v-model="selected" v-on:change="show = 'Mesh'" class="mb-5 w-6/12 mt-5 rounded-xl">
    <ListboxLabel class="flex block text-2xl font-medium text-gray-700">
      Select country
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton 
      class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <img :src="selected.avatar" alt="" class="flex-shrink-0 h-10 w-10 rounded-full" />
          <span class="ml-3 block truncate">{{ selected.name }}</span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        </span>
      </ListboxButton>
      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption as="template" @click="fetchAllHeadlineData"
           v-for="data in country" :key="data.id" :value="data" v-slot="{ active, selected }">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <img :src="data.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ data.name }}
                </span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
  <!--End Select Country end  -->

  <!-- Select Category -->
<Listbox as="div" v-model="selected_category" class="mb-5 w-6/12 rounded-xl">
    <ListboxLabel class="flex block text-2xl font-medium text-gray-700">
      Select category 
    </ListboxLabel>
    <div class="mt-1 relative">
      <ListboxButton class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <span class="flex items-center">
          <!-- image -->
          <span class="ml-3 block truncate">{{ selected_category.name }}</span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        </span>
      </ListboxButton>
      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          <ListboxOption as="template" @click="fetchAllHeadlineData"
          v-for="data in category" :key="data.id" :value="data" v-slot="{ active, selected_category }">
            <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <!-- <img :src="data.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" /> -->
                <span :class="[selected_category ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                  {{ data.name }}
                </span>
              </div>

              <span v-if="selected_category" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
  <!--End Select Category end  -->
<hr class="mb-2">
 <div 
          v-if="headline_total > 0"
          class=" text-black p-2 ml-2 mb-2">{{headline_total}}<small class="font-sm ml-2">articles</small></div>
  <!-- No data warning -->
<span 
          v-if="headline_all_data == '' && loader == false"
          class="text-2xl text-red-400 font-medium rounded-xl p-2"
            > No data to show</span>
 <!-- No data warning -->

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
 import { ref, reactive } from 'vue';
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue';
const country = [
  {
    id: 1,
    name: 'United Arab Emirates',
    iso: 'ae',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ae.svg',
  },
  {
    id: 2,
    name: 'Argentina',
    iso: 'ar',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ar.svg',
  },
  {
    id: 3,
    name: ' Austria',
    iso: 'at',
    avatar:
      'https://s3.amazonaws.com/rld-flags/at.svg',
  },
  {
    id: 4,
   name: ' Australia',
    iso: 'au',
    avatar:
      'https://s3.amazonaws.com/rld-flags/au.svg',
  },
  {
    id: 5,
    name: ' Austria',
    iso: 'at',
    avatar:
      'https://s3.amazonaws.com/rld-flags/at.svg',
  },
  {
    id: 6,
    name: ' Belgium',
    iso: 'be',
    avatar:
      'https://s3.amazonaws.com/rld-flags/be.svg',
  },
  {
    id: 7,
    name: ' Bulgaria',
    iso: 'bg',
    avatar:
      'https://s3.amazonaws.com/rld-flags/bg.svg',
  },
  {
    id: 8,
    name: ' Brazil',
    iso: 'br',
    avatar:
      'https://s3.amazonaws.com/rld-flags/br.svg',
  },
  {
    id: 9,
    name: ' Canada',
    iso: 'ca',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ca.svg',
  },
  {
    id: 10,
    name: ' Switzerland',
    iso: 'ch',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ch.svg',
  },
  {
    id: 11,
    name: ' China',
    iso: 'cn',
    avatar:
      'https://s3.amazonaws.com/rld-flags/cn.svg',
  },
  {
    id: 12,
    name: ' Colombia',
    iso: 'co',
    avatar:
      'https://s3.amazonaws.com/rld-flags/co.svg',
  },
  {
    id: 13,
    name: ' Cuba',
    iso: 'cu',
    avatar:
      'https://s3.amazonaws.com/rld-flags/cu.svg',
  },
  {
    id: 14,
    name: ' Czechia',
    iso: 'cz',
    avatar:
      'https://s3.amazonaws.com/rld-flags/cz.svg',
  },
  {
    id: 15,
    name: ' German',
    iso: 'de',
    avatar:
      'https://s3.amazonaws.com/rld-flags/de.svg',
  },
  {
    id: 16,
    name: ' Egypt',
    iso: 'eg',
    avatar:
      'https://s3.amazonaws.com/rld-flags/eg.svg',
  },
  {
    id: 17,
    name: ' France',
    iso: 'fr',
    avatar:
      'https://s3.amazonaws.com/rld-flags/fr.svg',
  },
  {
    id: 18,
    name: ' United Kingdom of Great Britain and Northern Ireland',
    iso: 'gb',
    avatar:
      'https://s3.amazonaws.com/rld-flags/gb.svg',
  },
  {
    id: 19,
    name: ' Greece',
    iso: 'gr',
    avatar:
      'https://s3.amazonaws.com/rld-flags/gr.svg',
  },
  {
    id: 20,
    name: ' Hong Kong',
    iso: 'hk',
    avatar:
      'https://s3.amazonaws.com/rld-flags/hk.svg',
  },
  {
    id: 21,
    name: ' Hungary',
    iso: 'hu',
    avatar:
      'https://s3.amazonaws.com/rld-flags/hu.svg',
  },
  {
    id: 22,
    name: ' Indonesia',
    iso: 'id',
    avatar:
      'https://s3.amazonaws.com/rld-flags/id.svg',
  },
  {
    id: 23,
    name: ' Ireland',
    iso: 'ie',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ie.svg',
  },
  {
    id: 24,
    name: ' Isreal',
    iso: 'il',
    avatar:
      'https://s3.amazonaws.com/rld-flags/il.svg',
  },
  {
    id: 25,
    name: ' India',
    iso: 'in',
    avatar:
      'https://s3.amazonaws.com/rld-flags/in.svg',
  },
  {
    id: 26,
    name: ' Italy',
    iso: 'it',
    avatar:
      'https://s3.amazonaws.com/rld-flags/it.svg',
  },
  {
    id: 27,
    name: ' Japan',
    iso: 'jp',
    avatar:
      'https://s3.amazonaws.com/rld-flags/jp.svg',
  },
  {
    id: 28,
    name: ' Korea',
    iso: 'kr',
    avatar:
      'https://s3.amazonaws.com/rld-flags/kr.svg',
  },
  {
    id: 29,
    name: ' Lithuania',
    iso: 'lt',
    avatar:
      'https://s3.amazonaws.com/rld-flags/lt.svg',
  },
  {
    id: 30,
    name: ' Latvia',
    iso: 'lv',
    avatar:
      'https://s3.amazonaws.com/rld-flags/lv.svg',
  },
  {
    id: 31,
    name: ' Morocco',
    iso: 'ma',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ma.svg',
  },
  {
    id: 32,
    name: ' Mexico',
    iso: 'mx',
    avatar:
      'https://s3.amazonaws.com/rld-flags/mx.svg',
  },
  {
    id: 33,
    name: ' Malaysia',
    iso: 'my',
    avatar:
      'https://s3.amazonaws.com/rld-flags/my.svg',
  },
  {
    id: 34,
    name: ' Nigeria',
    iso: 'ng',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ng.svg',
  },
  {
    id: 35,
    name: ' Netherlands',
    iso: 'nl',
    avatar:
      'https://s3.amazonaws.com/rld-flags/nl.svg',
  },
  {
    id: 36,
    name: ' Norway',
    iso: 'no',
    avatar:
      'https://s3.amazonaws.com/rld-flags/no.svg',
  },
  {
    id: 37,
    name: ' New Zealand',
    iso: 'nz',
    avatar:
      'https://s3.amazonaws.com/rld-flags/nz.svg',
  },
  {
    id: 38,
    name: ' Philippines',
    iso: 'ph',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ph.svg',
  },
  {
    id: 39,
    name: ' Poland',
    iso: 'pl',
    avatar:
      'https://s3.amazonaws.com/rld-flags/pl.svg',
  },
  {
    id: 40,
    name: ' Portugal',
    iso: 'pt',
    avatar:
      'https://s3.amazonaws.com/rld-flags/pt.svg',
  },
  {
    id: 41,
    name: ' Romania',
    iso: 'ro',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ro.svg',
  },
  {
    id: 41,
    name: ' Serbia',
    iso: 'rs',
    avatar:
      'https://s3.amazonaws.com/rld-flags/rs.svg',
  },
  {
    id: 42,
    name: ' Russia',
    iso: 'ru',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ru.svg',
  },
  {
    id: 43,
    name: ' Saudi Arabia',
    iso: 'sa',
    avatar:
      'https://s3.amazonaws.com/rld-flags/sa.svg',
  },
  {
    id: 44,
    name: ' Sweden',
    iso: 'se',
    avatar:
      'https://s3.amazonaws.com/rld-flags/se.svg',
  },
  {
    id: 45,
    name: ' Singapore',
    iso: 'sg',
    avatar:
      'https://s3.amazonaws.com/rld-flags/sg.svg',
  },
  {
    id: 46,
    name: ' slovenia',
    iso: 'si',
    avatar:
      'https://s3.amazonaws.com/rld-flags/si.svg',
  },
  {
    id: 47,
    name: ' Slovakia',
    iso: 'sk',
    avatar:
      'https://s3.amazonaws.com/rld-flags/sk.svg',
  },
  {
    id: 48,
    name: ' Thailand',
    iso: 'th',
    avatar:
      'https://s3.amazonaws.com/rld-flags/th.svg',
  },
  {
    id: 49,
    name: ' Turkey',
    iso: 'tr',
    avatar:
      'https://s3.amazonaws.com/rld-flags/tr.svg',
  },{
    id: 50,
    name: ' Taiwan',
    iso: 'tw',
    avatar:
      'https://s3.amazonaws.com/rld-flags/tw.svg',
  },
  {
    id: 51,
    name: ' Ukraine',
    iso: 'ua',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ua.svg',
  },
  {
    id: 52,
    name: ' United States America',
    iso: 'us',
    avatar:
      'https://s3.amazonaws.com/rld-flags/us.svg',
  },
  {
    id: 53,
    name: ' Venezuela',
    iso: 've',
    avatar:
      'https://s3.amazonaws.com/rld-flags/ve.svg',
  },
  {
    id: 54,
    name: ' South Africa',
    iso: 'za',
    avatar:
      'https://s3.amazonaws.com/rld-flags/za.svg',
  },


]

const category = [
 {
    id: 1,
    name: 'General',
    type: 'general',
  },
  {
   id: 2,
    name: 'Business',
    type: 'business',
  },
  {
    id: 3,
    name: 'Entertainment',
    type: 'entertainment',
  },
  {
   id: 4,
    name: 'Health',
    type: 'health',
  },
  {
    id: 5,
    name: 'Science',
    type: 'science',
  },
  {
    id: 6,
    name: 'Sports',
    type: 'sports',
  },
  {
    id: 7,
    name: 'Technology',
    type: 'technology',
  }
]
// import sdsd from "../../assets/images/4xstaWebLogo.png"
export default {
  components: {
    HeadlineItem,
    PopularTopics,
    // 
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions
  },
  setup() {
    const selected = ref(country[52]);
    const selected_category = ref(category[0]);

    const search_text = ref('');
    return {
      country,
      selected,
      category,
      selected_category,
      search_text
    };
  },
  data(){
    return{
       headline_all_data:[],
       headline_total:'',
       loader:false,
       show:''
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
        url: `https://newsapi.org/v2/top-headlines?country=${this.selected.iso}&category=${this.selected_category.type}&q=${this.search_text}&apiKey=959fb167d8d04c34a038d626d7766d9f`,
        headers: {
          "content-type": "application/json",
        },
      };

      axios
        .request(options)
        .then((response) => {
          (this.headline_all_data=response.data.articles);
          (this.headline_total=response.data.totalResults);
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

<style scoped>
#search{
  
}
</style>
