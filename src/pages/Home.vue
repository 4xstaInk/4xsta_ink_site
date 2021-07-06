<template>
    <div>
        <Header />
        <WhatWeOffer id="services" />
        <Article />
        <Timeline />
        <Covid />
        <Review />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import WhatWeOffer from "../components/WhatWeOffer.vue";
import Timeline from "../components/Timeline.vue";
import Article from "../components/Article.vue";
import Covid from "../components/news/Covid.vue";
import Review from "../components/Review.vue";
export default {
    components: {
        Header,
        WhatWeOffer,
        Article,
        Timeline,
        Covid,
        Review
    },
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>