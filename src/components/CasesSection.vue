<template>
    <div class="py-4">
        <Title title="Cases"/>
        <div class="rows flex flex-col rounded-lg drop-shadow-md gap-0.5 ">
            <List svgId="Calendar" name="Need Identified" count="6" placement="first"/>
            <List svgId="Currency" name="Hospitalisation" count="0"/>
            <List svgId="Billing" name="Education" count="0"/>
            <List svgId="Inbox" name="Others" placement="last" count="0"/>
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