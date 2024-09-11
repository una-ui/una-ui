<script setup lang="ts">
const model = ref<number>(1)
</script>

<template>
  <span>Current Page: {{ model }}</span>
  <NPagination
    v-model="model"
    :total="100"
  />
</template>
