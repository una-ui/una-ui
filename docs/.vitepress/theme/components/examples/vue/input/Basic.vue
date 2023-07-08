<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <NVInput
    v-model="value"
    type="email"
    placeholder="Enter your email"
  />
</template>
