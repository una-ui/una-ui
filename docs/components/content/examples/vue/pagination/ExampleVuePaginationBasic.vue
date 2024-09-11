<script setup lang="ts">
const model = ref<number>(1)
</script>

<template>
  <div space-y-4>
    <span>Current Page: {{ model }}</span>
    <NPagination
      v-model="model"
      :total="100"
    />
  </div>
</template>
