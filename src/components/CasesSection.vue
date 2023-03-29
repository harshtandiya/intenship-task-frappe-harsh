<template>
    <div class="py-4">
        <Title title="Cases"/>
        <div class="rows flex flex-col rounded-lg drop-shadow-md">
            <List/>

        </div>
    </div>
</template>

<script>
import Title from "./TitleItem"
import List from "./ListItem"

export default {
    name: 'case-section',
    components: {
        Title,
        List,
    },
    props: {
    },
}

</script>