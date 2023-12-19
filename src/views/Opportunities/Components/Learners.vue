<template>
  <div>
    <Navigation></Navigation>
  </div>
  <!--  -->
  <div class="section w-full h-full py-16">
    <h1 class="text-white pb-12 sm:text-3xl text-2xl text-center font-semibold">
      Ishtirok etish shartlari
    </h1>
    <div class="w-4/5 h-full m-auto md:grid grid-cols-12 grid-rows-2 gap-8">
      <div class="kard1 rounded-2xl col-span-3 md:mb-0 mb-8">
        <h1 class="text-white text-xl font-semibold font-sans px-7 pt-10 ">Arizalar soni </h1>
        <p class="text-white font-sans py-4 px-7 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat dicta quae pariatur. Cum debitis asperiores itaque recusandae similique explicabo, quod quis! Amet, distinctio culpa quia libero aut vitae praesentium itaque.</p>
      </div>
      <div class="kard1 rounded-2xl col-span-3 row-span-2 md:mb-0 mb-8">
        <h1 class="text-white text-xl font-semibold font-sans px-7 pt-10 ">Arizalar soni </h1>
        <p class="text-white font-sans py-4 px-7 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat dicta quae pariatur. Cum debitis asperiores itaque recusandae similique explicabo, quod quis! Amet, distinctio culpa quia libero aut vitae praesentium itaque.</p>
      </div>
      <div class="kard2 rounded-2xl col-span-3 md:mb-0 mb-8">
        <h1 class="text-white text-xl font-semibold font-sans px-7 pt-10 ">Arizalar soni </h1>
        <p class="text-white font-sans py-4 px-7 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat dicta quae pariatur. Cum debitis asperiores itaque recusandae similique explicabo, quod quis! Amet, distinctio culpa quia libero aut vitae praesentium itaque.</p>
      </div>
      <div class="kard1 rounded-2xl col-span-3 md:mb-0 mb-8">
        <h1 class="text-white text-xl font-semibold font-sans px-7 pt-10 ">Arizalar soni </h1>
        <p class="text-white font-sans py-4 px-7 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat dicta quae pariatur. Cum debitis asperiores itaque recusandae similique explicabo, quod quis! Amet, distinctio culpa quia libero aut vitae praesentium itaque.</p>
      </div>
      <div class="kard2 rounded-2xl border-fuchsia-400 col-span-3 md:mb-0 mb-8">
        <h1 class="text-white text-xl font-semibold font-sans px-7 pt-10 ">Arizalar soni </h1>
        <p class="text-white font-sans py-4 px-7 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat dicta quae pariatur. Cum debitis asperiores itaque recusandae similique explicabo, quod quis! Amet, distinctio culpa quia libero aut vitae praesentium itaque.</p>
      </div>
      <div class="kard2 rounded-2xl col-span-6  md:mb-0 mb-8">
        <h1 class="text-white text-xl font-semibold font-sans px-7 pt-10 ">Arizalar soni </h1>
        <p class="text-white font-sans py-4 px-7 text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat dicta quae pariatur. Cum debitis asperiores itaque recusandae similique explicabo, quod quis! Amet, distinctio culpa quia libero aut vitae praesentium itaque.</p>
      </div>
    </div>
  </div>

  <!--  -->
  <div>
    <faq></faq>
  </div>
  <div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Navigation from "../../Navigation/Navigation.vue";
import Footer from "../../Footer/Footer.vue";
import faq from "../../FAQ/Faq.vue";
</script>

<style lang="scss" scoped>
.section {
  background: rgb(17, 64, 113);
  background: linear-gradient(
    0deg,
    rgba(17, 64, 113, 1) 100%,
    rgba(52, 141, 230, 0.9472163865546218) 100%
  );
}
.kard1 {
  background: linear-gradient(
    180deg,
    rgb(101, 174, 238) 0%,
    rgb(50, 115, 172) 100%
  );
}
.kard2 {
  background: linear-gradient(180deg, #3477b0, rgba(30, 83, 130, 0));
}

</style>
