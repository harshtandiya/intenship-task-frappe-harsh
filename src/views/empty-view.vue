<template>
    <h1 class=" text-xl font-semibold align-middle text-center">Empty View</h1>
    <div class="flex items-center justify-center p-20  font-medium underline text-lg">
        <router-link to="/">
            <p>Go Back</p>
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'empty-view',
    components: {
    },
    props: {
    },
}

</script>