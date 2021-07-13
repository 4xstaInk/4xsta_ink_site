<template>
  <div>
    <!-- <h1>Product List</h1> -->
    <h1 v-if="loading" class="bg-gray-200 text-yellow-500 font-bold">
      Loading...
    </h1>
    <!-- <ul v-else> -->
    <!-- <li v-for="product in products" :key="product">{{product.title}} - {{product.price}} - {{product.inventory}}
 <button 
 :disabled="!productIsInStock(product)"
 :class="!productIsInStock(product) ? 'cursor-not-allowed' : ''"
 @click="addProductToCart(product)">Add to cart</button>

 <button 
 @click="removeProductToCart(product)">Remove to cart</button>
            </li>
        </ul> -->

    <div class="mt-16 mb-16">
      <h3 class="text-gray-600 text-2xl font-medium ml-7">Products</h3>
      <div
        class="
          grid
          gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          mt-6
        "
      >
        <div
          v-for="product in products"
          :key="product"
          class="
            bg-white
            w-10/12
            max-w-sm
            mx-auto
            rounded-md
            shadow-md
            overflow-hidden
          "
        >
          <div
            class="flex items-end justify-end bg-green-200 h-56 w-full bg-cover"
            style="
              background-image: url('../assets/images/what_people_are_saying/Meshullam.jpg');
            "
          ></div>
          <div class="px-5 py-3">
            <h3 class="text-gray-700 font-bold uppercase">
              {{ product.title }}
            </h3>
            <p class="font-bold">K{{ product.price }}</p>

            <div class="pt-2 pb-2 mt-2 border-t-2 border-b-2">
              <p
                :disabled="!productIsInStock(product)"
                :class="
                  !productIsInStock(product)
                    ? 'text-gray-300 hidden cursor-not-allowed'
                    : ''
                "
                @click="addProductToCart(product)"
                class="flex text-lg mb-3 hover:text-gray-500 cursor-pointer"
              >
                <mdi:cart-plus />Add to cart
              </p>
              <p
                @click="removeProductToCart(product)"
                :class="
                  productIsInStock(product) < productInventoryIsInStock(product)
                    ? 'text-gray-300 hidden cursor-not-allowed'
                    : ''
                "
                class="flex text-lg mb-3 hover:text-gray-500 cursor-pointer"
              >
                <mdi:cart-minus /> Remove from cart
              </p>
            </div>
            <p>{{ product.inventory }} remaining </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    products() {
      return this.$store.state.shoppingcart.products;
    },

    productIsInStock() {
      return this.$store.getters["shoppingcart/productIsInStock"];
    },
    productInventoryIsInStock() {
      return this.$store.getters["shoppingcart/productInventoryIsInStock"];
    },
  },
  created() {
    this.loading = true;
    this.$store
      .dispatch("shoppingcart/fetchProducts")
      .then(() => (this.loading = false));
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("shoppingcart/addProductToCart", product);
    },
    removeProductToCart(product) {
      this.$store.dispatch("shoppingcart/removeProductToCart", product);
    },
  },
};
</script>

<style scoped></style>
