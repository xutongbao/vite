<template>
  <div :id="category.id" class="js-category">
    <div class="m-category-title">
      {{ category.title }}
    </div>
    <CategoryItem
      v-for="book in category.list"
      :key="book.id"
      :book="book"
    ></CategoryItem>
  </div>
</template>

<script setup>
import { onMounted, defineProps, defineEmit } from "vue"
import CategoryItem from "./CategoryItem.vue"

const props = defineProps({
  category: {
    type: Object,
  },
})

const emit = defineEmit(["onTopArr"])

onMounted(() => {
  const topArr = [...document.getElementsByClassName("js-category")].map(
    (item) => item.offsetTop
  )
  topArr.push(Infinity)
  emit("onTopArr", topArr)
})
</script>

<style></style>
