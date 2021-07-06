<template>
    <div>
<nav id="header" class="bg-blue-300 text-white w-full z-20 top-0">
	<div class="w-full flex flex-wrap items-center justify-between mt-0 py-3">
		<div class="w-full bg-blue-300 flex-grow lg:flex lg:items-center lg:w-auto lg:block mt-0 lg:mt-0  z-20"
			id="nav-content">
            <router-link :to="{name: 'home'}"><img
            class="w-20"
             src="../assets/images/4xstaWebLogo.png" /></router-link>
            
		</div>
	</div>
</nav>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>