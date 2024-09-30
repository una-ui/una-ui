<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <NSwitch
    v-model:checked="enabled"
    switch-selected="red"
  />
</template>
