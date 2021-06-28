<template>
    <div>
        <!-- <NavBar /> -->
        <Header />
        <Review />
    </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Header from "../components/Header.vue";
import Review from "../components/Review.vue";
export default {
    components: {
        NavBar,
        Header,
        Review
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>