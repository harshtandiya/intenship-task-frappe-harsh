<template>
    <router-link to="/empty" >
        <div :style="rounded" class="flex p-4 w-full h-16 font-medium bg-white justify-between items-center">
            <div class="flex justify-start gap-4">
                <SvgIcon svgId="SVG"/>
                <p>{{ name }}</p>
            </div>
            <div class = "flex justify-end gap-4">
                <div v-show="countShow" class=" bg-blue-100 text-blue-600 px-4 py-2 rounded-full">{{ count }}</div>
                <img :src="rightArrow" class="w-2" />
            </div>
        </div>
    </router-link>

</template>

<script>
import SvgIcon from './SvgIcon.vue'

export default {
    name: 'ListItem',
    props: {
        type: String,
        svgId: String,
        name: String,
        count: Number,
        placement: {
            String,
            default: ""
        },
    },
    data(){
        return {
            rightArrow: require('../assets/icons/arrowRight.svg'),
        }
    },
    components:{
        SvgIcon,
    },
    computed:{
        countShow(){
            if(this.count != 0){
                return true;
            }
            else{
                return false;
            }
        },
        rounded(){
            if(this.placement == "first"){
                return "border-top-left-radius: 1rem; border-top-right-radius: 1rem;";
            }
            else if(this.placement == "last"){
                return "border-bottom-left-radius: 1rem; border-bottom-right-radius: 1rem;";
            }
            else{
                return "border-radius: 0rem";
            }
        },
        SVG(){
            return this.svgId
        }
    },
}
</script>