<template>
  <span
    :class="`icon iconfont icon-${name} ${className}`"
    @click="handleClick"
  ></span>
</template>

<script setup>
import { defineProps, defineEmit } from "vue"

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
})

const emit = defineEmit(["onClick"])

const handleClick = () => {
  emit("onClick")
}

</script>

<style></style>
