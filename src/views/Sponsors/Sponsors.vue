<template>

<div class="main pt-10">
    <h1 class="text-white bg-transparent md:text-[50px] text-2xl font-sans text-center  font-bold md:py-14 py-5">Homiylar</h1>
    <Vue3Marquee :clone="true" :duration="5" :direction="'reverse'" >
            <img
                v-for="img in imgArray"
                :key="img"
                :src="img"
                class="md:w-[300px] h-16  w-[200px]"
            />
        </Vue3Marquee>
</div>

</template>

<script setup>
import {ref} from 'vue'

// const sponsors = ref([
// {
// image:'https://img.moviesrankings.com/t/p/w1280/9kwrqlSV2d3bJwnp4uYARxVdqsx.jpg'
// },

// {
// image:'https://img.moviesrankings.com/t/p/w1280/9kwrqlSV2d3bJwnp4uYARxVdqsx.jpg'
// },



// ])


const imgArray = [
    'https://sponsors.vuejs.org/images/layer0.avif',
    'https://sponsors.vuejs.org/images/plaid__inc_.svg',
]

</script>



<style lang="scss" scoped>

.main{
    background: rgb(17, 64, 113);
}

:deep .vue3-marquee>.transparent-overlay{
    background: rgb(17, 64, 113);
  background: linear-gradient(
    0deg,
    rgba(17, 64, 113, 1) 100%,
    rgba(52, 141, 230, 0.9472163865546218) 100%
  );
}

:global(.vue3-marquee>.marquee) {
    background: rgb(17, 64, 113);
}


</style>