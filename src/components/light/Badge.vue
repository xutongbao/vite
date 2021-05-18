<template>
  <div class="m-badge-wrap">
    <slot></slot>
    <span class="m-badge" v-show="formatCount !== 0">{{ formatCount }}</span>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue"

const props = defineProps({
  count: {
    type: Number,
  },
})

const formatCount = computed(() => {
  const { count } = props
  return count > 99 ? "99+" : count
})
</script>

<style></style>
