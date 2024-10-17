<script lang="ts" setup>
const value = ref<string[]>([])
</script>

<template>
  <NPinInput v-model="value" pin-input="outline-indigo" />
</template>
