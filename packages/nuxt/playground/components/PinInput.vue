<script lang="ts" setup>
const value = ref<string[]>([])
// eslint-disable-next-line no-alert
const handleComplete = (e: string[]) => alert(e.join(''))
</script>

<template>
  <NPinInput v-model="value" @complete="handleComplete" />
</template>
