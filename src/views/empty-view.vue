<template>
    <Header title="Empty Page"/>
    <div class="h-full w-full flex items-center justify-center p-20  font-medium underline">
        <router-link to="/">
            <p>Go Back</p>
        </router-link>
    </div>
</template>

<script>
import Header from "../components/HeaderItem"
export default {
    name: 'empty-view',
    components: {
        Header,
    },
    props: {
    },
}

</script>