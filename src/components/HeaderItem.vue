<template>
    <div class="container bg-white px-8 py-4">
        <div v-show="dashboardPage" class=" flex-col">
            <h1 class="font-sans text-2xl font-semibold">Welcome {{ name }}!</h1>
            <p class="address text-gray-600 text-sm">{{ address }}</p>
        </div>
        <div v-show="!dashboardPage">
            <h1 class="font-sans text-2xl font-semibold">{{ title }}</h1>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HeaderItem',
    props: {
        name: String,
        address: String,
        title: String,
    },
    components: {
    },
    computed: {
        dashboardPage() {
            if (this.$route.path === '/') {
                return true
            }
            else {
                return false
            }
        }
    },
}

</script>