import { createStore } from "vuex";

import { covid } from "./module/covid.js";

export default createStore({
// state:{
//     counter:0
// },
// mutations:{
//     decreaseCounter(state){
//         state.counter--
//     },
//     increaseCounter(state){
//         state.counter++
//     }
// },
// actions:{

// },
// getters:{

// },
modules:{
 covid
}
})