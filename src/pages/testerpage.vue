<template>
   <div>
    <ProductList />
    <hr>
    <ShoppingCart />
     </div>
    
</template>

<script>
import axios from "axios";
import ProductList from "../components/ProductList.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
export default {
  props:['headline_all_data'],
    components: {
ProductList,
ShoppingCart
    },
    setup () {
        
        return {}
    },
    data() {
        return {
          
        };
    },
    computed: {
      
      },
    methods: {
     
        },
        mounted(){

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