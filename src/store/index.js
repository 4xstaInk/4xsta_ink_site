import { createStore } from "vuex";

import { covid } from "./module/covid.js";
import { tester } from "./module/tester.js";
import { shoppingcart } from "./module/shoppingcart.js";

export default createStore({

    modules:{
 covid,
 shoppingcart,
 tester
}
})