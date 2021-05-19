<template>
  <router-view/>
  <Teleport to="body">
    <Loading></Loading>
  </Teleport>
</template>

<script setup>
import Loading from './components/light/Loading.vue'
</script>

