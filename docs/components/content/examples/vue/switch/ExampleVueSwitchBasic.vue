<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <NSwitch
    v-model="enabled"
    switch-selected="red"
  />
</template>
