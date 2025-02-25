<script lang="ts" setup>
const value = ref<string[]>([])

const handleComplete = (e: string[]) => alert(e.join(''))
</script>

<template>
  <NPinInput v-model="value" @complete="handleComplete" />
</template>
