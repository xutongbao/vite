<template>
  <div>
    <input v-model="username" :ref="handleUsernameRef" autofocus />
  </div>
  <div>
    <input v-model="password" :type="visible ? 'text' : 'password'" @keyup.enter="handleLogin" />
    <Icon
      :name="visible ? 'show' : 'hide'"
      className="m-login-icon"
      @onClick="handleVisible"
    ></Icon>
  </div>
  <button @click="handleLogin">登录</button>
</template>

<script setup>
import { reactive, toRefs, onMounted } from "vue"
import { useRouter } from 'vue-router'
import Icon from "@/components/light/Icon.vue"
import Api from '@/api'

const state = reactive({
  username: "admin",
  password: "123456",
  visible: false,
})

const router = useRouter()

const { username, password, visible } = toRefs(state)

const handleVisible = () => {
  state.visible = !state.visible
}

const handleLogin = () => {
  const { username, password } = state
  Api.light.login({ username, password }).then((res) => {
    if (res.code === 200) {
      router.push("/light/index/home")
    }
  })
}

let usernameRef
const handleUsernameRef = (el) => {
  usernameRef = el
}

onMounted(() => {
  usernameRef.focus()
})
</script>

<style></style>
