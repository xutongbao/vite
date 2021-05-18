<template>
  <div class="m-main m-home">
    <Sidebar></Sidebar>
    <List></List>    
  </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue"
import List from "./List.vue"
import { onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

onMounted(() => {
  store.dispatch({ type: 'getLightList' })
})
</script>

<style>

</style>