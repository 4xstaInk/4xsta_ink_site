<template>
  <div v-for="data in headline_all_data" :key="data">
    <div
      @click="
        showModal = true;
        headline_data = data;
      "
      id="headline-item"
      class="
        max-w-md
        mx-auto
        bg-white
        rounded-xl
        shadow-md
        overflow-hidden
        md:max-w-2xl
        mb-2
        cursor-pointer
      "
    >
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="h-full w-full object-cover md:w-48"
            :src="data.urlToImage"
            alt="A cat"
          />
        </div>
        <div class="p-8">
          <p class="block mt-1 font-bold text-lg text-black">
            {{ data.title }}
          </p>
          <p class="mt-2 text-gray-500">{{ data.description }}</p>
          <hr />
          <p class="flex">
            <mdi:clock-outline class="mr-2" />
            {{
              moment(data.publishedAt).format("ddd MMM DD, YYYY [at] HH:mm a")
            }}
          </p>
          <p class="flex"><mdi:earth class="mr-2" /> {{ data.source.name }}</p>
          <p class="flex">
            <mdi:face-agent class="mr-2" /> {{ data.author }}
            <span v-if="data.author == ''">No author available</span>
          </p>
          <a :href="`${data.url}`" target="_blank" class="flex text-blue-500">
            <mdi:web class="mr-2" /> Click to read more
          </a>
        </div>
      </div>
    </div>
  </div>
  <VueTailwindPagination
    :current="currentPage"
    :total="total"
    :per-page="Number(3)"
    @page-changed="pageChange($event)"
  >
  </VueTailwindPagination>
  <div>
    <transition name="fade" appear>
      <div
        class="modal-overlay"
        v-if="showModal"
        @click="showModal = false"
      ></div>
    </transition>
    <transition name="pop" appear>
      <div class="modal" role="dialog" v-if="showModal">
        <HeadlineItemModal :headline_data="headline_data" />
        <div class="mt-5">
          <span
            @click="showModal = false"
            class="
              text-2xl
              border
              rounded-lg
              bg-gray-200
              p-2
              my-5
              cursor-pointer
              hover:bg-gray-100
            "
            >CLOSE</span
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import moment from "moment";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";

import HeadlineItemModal from "../news/HeadlineItemModal.vue";
export default {
  props: ["headline_all_data"],
  components: {
    HeadlineItemModal,
    VueTailwindPagination,
  },
  setup() {
    return {};
  },
  data() {
    return {
      showModal: false,
      headline_data: "",

      //   Paginator
      currentPage: 1,
      total: 0,
      perPage: 3,
    };
  },
  created() {
    this.moment = moment;
  },
};
</script>

<style scoped>
#headline-item {
  transition: transform 2s;
}
#headline-item:hover {
  transform: scale(1.03);
}

html {
  height: 100%;
  background: #fff;
  color: #000;
  font-size: 62.5%;
}

body {
  min-height: 100%;
  margin: 0;
  display: grid;
  place-items: center;
  font-size: 1.4rem;
}

.button {
  border: none;
  color: #fff;
  background: #42b983;
  appearance: none;
  font: inherit;
  font-size: 1.8rem;
  padding: 0.5em 1em;
  border-radius: 0.3em;
  cursor: pointer;
}

.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: 100%;
  height: fit-content;
  max-width: 95%;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
