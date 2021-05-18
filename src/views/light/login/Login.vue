<template>
  <div>
    <input v-model="username" :ref="handleUsernameRef" autofocus />
  </div>
  <div>
    <input
      v-model="password"
      :type="visible ? 'text' : 'password'"
      @keyup.enter="handleLogin"
    />
    <Icon
      :name="visible ? 'show' : 'hide'"
      className="m-login-icon"
      @onClick="handleVisible"
    ></Icon>
  </div>
  <button @click="handleLogin">登录</button>
</template>

<script setup>
import Icon from "@/components/light/Icon.vue"
import useLogin from "./useLogin"

const {
  username,
  password,
  visible,
  handleUsernameRef,
  handleVisible,
  handleLogin,
} = useLogin()
</script>

<style></style>
