<template>
    <div class=" py-4">
        <Title title="Quick Links"></Title>
        <div class="flex gap-6">
            <router-link to='/empty' class="w-full">
                <div class="p-6 w-full h-full gap-3 flex flex-col bg-white font-medium drop-shadow-md  text-base rounded-lg text-gray-900 justify-center items-center">
                    <img :src="userSVG1" class=" w-9 " />
                    <p>Beneficiaries</p>
                </div>
            </router-link>
            <router-link to='/empty' class="w-full">
                <div class="p-6 w-full h-full gap-3 flex flex-col bg-white font-medium drop-shadow-md  text-base rounded-lg text-gray-900 justify-center items-center">
                    <img :src="userSVG2" class=" w-9 " />
                    <p class=" w-max">Rescue</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import Title from "./TitleItem"

export default {
    name: "LinksItem",
    components: {
        Title,
    },
    props: {},
    data() {
        return {
            userSVG1: require('../assets/icons/users.svg'),
            userSVG2: require('../assets/icons/rescue.svg'),
        }
    },
};
</script>
