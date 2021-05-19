<template>
  <div class="m-main">
    <el-button @click="handleLogout">退出</el-button>
  </div>
</template>

<script setup>
import { ElButton } from "element-plus"
import { useRouter } from "vue-router"

const router = useRouter()
const handleLogout = () => {
  router.push("/light/login")
}
</script>

<style></style>
