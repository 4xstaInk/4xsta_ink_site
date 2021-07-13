<template>
    <div>
    <h1 class="flex text-3xl text-blue-500 font-lg mx-auto mb-3"><mdi:cart /> Shopping Cart</h1>
<div class="legend">
    <div id="todos" class="overflow-x-scroll
              overflow-y-scroll
              scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
    <div 
    v-for="product in products" 
    :key="product"
    >
        <div 
        v-if="product.quantity > 0"
        class="w-40 mb-1 mx-auto border">
            <div class="bg-sky-200 h-20">
                <!-- Image -->
            </div>
            <div class="bg-white">
            <h1>
               {{product.title}}
            </h1>
            <h1>
                K{{product.price}}
            </h1>
            <h1>
               Quantity: {{product.quantity}}
            </h1>
            <div class="flex px-auto">
                <mdi:minus 
                @click="decrementProductQuantity(product)"
                class="text-2xl ml-10 mr-2 hover:bg-gray-100 p-1 rounded-full border cursor-pointer" /> 
                <mdi:plus 
                @click="incrementProductQuantity(product)"
                class="text-2xl hover:bg-gray-100 p-1 rounded-full border cursor-pointer"/>
            </div>
            </div>
        </div>
    </div>
    </div>
    </div>

    <p>Total: {{total}}</p>
    <button @click="$store.dispatch('shoppingcart/checkout')">Checkout</button>
    <p v-if="$store.state.shoppingcart.checkoutStatus">{{$store.state.shoppingcart.checkoutStatus}}</p>
    </div>
</template>

<script>
export default {
    setup () {
     

        return {}
    },
    data(){
        return{
            iproducts:''
        }
    },
    computed: {
        products() {
            return this.$store.getters["shoppingcart/cartProducts"]
        },
        total() {
            return this.$store.getters["shoppingcart/cartTotal"]
        }
    },
    methods: {
        decrementProductQuantity(product){
            this.$store.commit('shoppingcart/decrementProductQuantity', product)
        },
        incrementProductQuantity(product){
            this.iproducts = product
             this.$store.dispatch('shoppingcart/addProductToCart', product)
        }
    },
}
</script>

<style scoped>
#todos {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 1rem;
  height:500px;
}
.legend{
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
@media screen and (max-width: 900px) {
 #todos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  height:500px;
  overflow-y: auto;
}
.legend{
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
}
@media screen and (max-width: 400px) {
 #todos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  height:500px;
  overflow-y: auto;
}
.legend{
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
}
</style>