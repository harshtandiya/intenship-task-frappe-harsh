<template>
    <Header name="Harsh" address="Chandigarh University" title="Dashboard" />
    <div class="container px-8 ">
        <Summary beneficiaries="157" />
        <Link />
        <Cases />
    </div>
</template>

<script>
import Header from '../components/HeaderItem'
import Summary from '../components/SummaryItem'
import Link from '../components/LinksItem'
import Cases from '../components/CasesSection'

export default {
    name: 'dashboard-view',
    components: {
        Header,
        Summary,
        Link,
        Cases,
    },
    props: {
    },
}

</script>