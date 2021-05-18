<template>
  <div>
    <Icon
      v-for="n in 5"
      :key="n"
      name="star"
      :className="`m-star ${n <= number ? 'active' : ''}`"
    ></Icon>
  </div>
</template>

<script setup>
import { defineProps } from "vue"
import Icon from "./Icon.vue"

const props = defineProps({
  number: {
    type: Number,
    default: 0,
  },
})
</script>

<style></style>
