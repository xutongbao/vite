<template>
  <div class="m-sidebar">
    <SidebarItem
      v-for="sidebarItem in list"
      :key="sidebarItem.id"
      :sidebarItem="sidebarItem"
    >
    </SidebarItem>
  </div>
</template>

<script setup>
import { useStore } from "vuex"
import { computed } from "vue"
import SidebarItem from "./SidebarItem.vue"

const store = useStore()
const list = computed(() => store.state.light.list)
</script>

<style></style>
