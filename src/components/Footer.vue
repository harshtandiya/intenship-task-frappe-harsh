<template>
    <div class="flex w-full bg-white h-16 absolute border py-3 justify-center gap-28">
        <img v-show="isHome" :src="require('../assets/icons/Dashboard-Dark.svg')"/>
        <router-link v-show="!isHome" to="/">
            <img :src="require('../assets/icons/Dashboard-Light.svg')"/>
        </router-link>
        <img v-show="!isHome" :src="require('../assets/icons/Profile-Dark.svg')"/>
        <router-link v-show="isHome" to="/empty">
            <img :src="require('../assets/icons/Profile-Light.svg')"/>
        </router-link>
    </div>
</template>

<script>

export default {
    name: "footer-item",
    computed:{
        isHome() {
            if (this.$route.path === '/') {
                return true
            }
            else {
                return false
            }
        },
    },
}
</script>