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
import useTools from '../../../../utils/useTools'

const store = useStore()

onMounted(async () => {
  const { showLoading, hideLoading } = useTools()
  showLoading()
  await store.dispatch({ type: 'getLightList' })
  hideLoading()
})
</script>

<style>

</style>