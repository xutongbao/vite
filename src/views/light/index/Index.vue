<template>
  <div class="m-wrap">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '@/components/light/Header.vue'
import Footer from '@/components/light/Footer.vue'
</script>

<style>

</style>