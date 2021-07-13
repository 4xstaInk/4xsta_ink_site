<template>
    <div>
    <h1>Shopping Cart</h1>
    <ul>
        <li v-for="product in products" :key="product">
            {{product.title}} - {{product.price}} - {{product.quantity}}
        </li>
    </ul>
    <p>Total: {{total}}</p>
    <button @click="$store.dispatch('tester/checkout')">Checkout</button>
    <p v-if="$store.state.tester.checkoutStatus">{{$store.state.tester.checkoutStatus}}</p>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    },
    computed: {
        products() {
            return this.$store.getters["tester/cartProducts"]
        },
        total() {
            return this.$store.getters["tester/cartTotal"]
        }
    },
}
</script>

<style scoped>

</style>