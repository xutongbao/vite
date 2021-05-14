<template>
  <div class="m-header">{{header}}</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const header = computed(() => store.state.light.header)
</script>

<style>

</style>