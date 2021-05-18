<template>
  <div :class="[`m-mask ${visible ? 'active' : ''}`]">
    <div class="m-dialog">
      <div class="m-dialog-header">
        <span class="m-dialog-header-title">{{ title }}</span>
        <span class="m-dialog-header-close" @click="handleClose">X</span>
      </div>
      <div class="m-dialog-content">
        <slot name="content"></slot>
      </div>
      <div class="m-dialog-footer">
        <button class="m-btn" @click="handleClose">取消</button>
        <button class="m-btn" @click="handleOk">确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmit } from "vue"

const props = defineProps({
  visible: {
    type: Boolean,
  },
  title: {
    type: String,
  },
})

const emit = defineEmit(["onClose", "onOk"])

const handleClose = () => {
  emit("onClose")
}

const handleOk = () => {
  emit("onOk")
}
</script>

<style></style>
