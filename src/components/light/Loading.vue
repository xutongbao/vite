<template>
  <div :class="`m-loading ${isLoading ? 'active' : ''}`"></div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
const isLoading = computed(() => store.state.light.isLoading)
</script>

<style></style>
