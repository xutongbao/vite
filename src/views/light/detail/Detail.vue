<template>
  <Header></Header>
  <Content></Content>
</template>

<script setup>
import { onMounted, reactive, toRefs } from "vue"
import { useRoute } from "vue-router"
import Header from "./Header.vue"
import Content from "./Content.vue"
import { useStore } from "vuex"
import useTools from "../../../utils/useTools"

const route = useRoute()
const store = useStore()

onMounted(() => {
  const { id } = route.params
  const { showLoading, hideLoading } = useTools()
  showLoading(0)
  store.dispatch({ type: "getDetail", id }).then(() => {
    hideLoading()
  })
})
</script>

<style></style>
