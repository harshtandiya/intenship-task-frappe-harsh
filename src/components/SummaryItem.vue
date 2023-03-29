<template>
    <div class="flex-col py-4">
        <TitleItem title="Summary" />
        <div class="w-auto bg-white px-4 py-5 rounded-lg drop-shadow-md">
            <div class=" text-sm font-semibold text-gray-400 mb-1">BENEFICIARIES TOUCHED</div>
            <p class=" text-4xl font-semibold text-gray-900">{{ beneficiaries }}</p>
            <div class="flex items-end content-between pr-4">
                <Bar class="w-auto mt-3 mr-1 p-2" id="my-chart-id" :options="chartOptions" :data="chartData" />
                <router-link to="/empty">
                    <img :src="mySVG" class=" w-3"/>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import TitleItem from './TitleItem.vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
    name: 'SummaryItem',
    props: {
        beneficiaries: String,
    },
    components: {
        TitleItem,
        Bar,
    },
    data() {
        return {
            mySVG:  require('../assets/icons/arrowRight.svg'),
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',],
                datasets: [{ data: [23, 13, 38, 18, 20, 32, 28, 12] }],
            },
            chartOptions: {
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                },
                barThickness: 10,
                responsive: true,
                backgroundColor: '#46A5F9',
                borderWidth: 0.1,
                plugins: {
                    legend: {
                        display: false
                    },
                }
            },
        }
    }
}

</script>