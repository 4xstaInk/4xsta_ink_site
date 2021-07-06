<template>
    <div>
<!-- FLOATING IMAGE -->
<div @click="showModal = true" class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10 cursor-pointer">
    <div
    
    >
        <div class="block w-16 h-16 bg-gray-100 p-2 rounded-full transition-all shadow-lg hover:shadow-lg transform hover:scale-110 hover:rotate-12">
        <img 
        src="../../assets/images/4xstaWebLogo.png" alt="" 
        title=""
        class="object-cover object-center w-full h-full rounded-full text-blue-500"
         />            
        </div>
    </div>
</div>


<!-- Modal -->
<div title="Click to view more detail data">
  <transition name="fade" appear>
    <div class="modal-overlay" 
         v-if="showModal" 
         @click="showModal = false"></div>
  </transition>
  <transition name="pop" appear>
    <div class="modal" 
         role="dialog" 
         v-if="showModal"
         >
         <div>
             <FloatingButtonContent />
         </div>
        <div class="mt-5">
        <span 
        @click="showModal = false" 
        class="border rounded-lg bg-gray-200 p-2 my-5 mb-5 cursor-pointer hover:bg-gray-100">CLOSE</span></div>
        </div>
  </transition>
    
    </div>
    </div>
</template>

<script>
import FloatingButtonContent from "./FloatingButtonContent.vue";

export default {
    components: {
        FloatingButtonContent,
    },
    setup () {
        

        return {}
    },
    data(){
        return{
            showModal: false
        }
    },
}
</script>

<style scoped>
html {
  height: 100%;
  background: #FFF;
  color: #000;
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
  color: #FFF;
  background: #42b983;
  appearance: none;
  font: inherit;
  font-size: 1.8rem;
  border-radius: .3em;
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
  padding: 10px;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #FFF;
  z-index: 999;
  transform: none;
}
.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: '';
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
  transition: opacity .4s linear;
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