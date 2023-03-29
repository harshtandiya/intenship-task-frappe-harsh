<template>
    <div class="py-4">
        <Title title="Cases"/>
        <div class="rows flex flex-col rounded-lg drop-shadow-md gap-0.5 ">
            <List svgId="Calender.svg" name="Need Identified" count="6" placement="first"/>
            <List svgId="Currency.svg" name="Hospitalisation" count="0"/>
            <List svgId="Currency-1.svg" name="Education" count="0"/>
            <List svgId="Inbox.svg" name="Others" placement="last" count="0"/>
        </div>
    </div>
</template>

<script>
import Title from "./TitleItem"
import List from "./ListItem"

export default {
    name: 'CaseSection',
    components: {
        Title,
        List,
    },
    props: {
    },
}

</script>