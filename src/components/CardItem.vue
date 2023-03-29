<template>
    <div
        class="p-6 w-full h-full gap-3 flex flex-col bg-white font-medium drop-shadow-md  text-base rounded-lg text-gray-900 justify-center items-center">
        <img :src="require(`../assets/icons/${svgId}`)" class=" w-9 " />
        <p class=" w-max">{{ name }}</p>
    </div>
</template>

<script>

export default {
    name: 'CardItem',
    props: {
        name: String,
        svgId: String,
    },
}

</script>