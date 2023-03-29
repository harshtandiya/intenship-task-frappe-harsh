<template>
    <div class=" py-4">
        <Title title="Quick Links"></Title>
        <div class="flex gap-6">
            <router-link to='/empty' class="w-full">
                <CardItem name="User" svgId="users.svg"/>
            </router-link>
            <router-link to='/empty' class="w-full">
                <CardItem name="Rescue" svgId="rescue.svg"/>
            </router-link>
        </div>
    </div>
</template>

<script>
import Title from "./TitleItem"
import CardItem from "./CardItem"

export default {
    name: "LinksItem",
    components: {
        Title,
        CardItem,
    },
    props: {},
};
</script>
