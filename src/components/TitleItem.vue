<template>
    <div class="font-semibold my-2">{{ title }}</div>
</template>

<script>
export default {
    name: 'TitleComponent',
    props: {
        title: String,
    },
    components: {
    },
}
</script>