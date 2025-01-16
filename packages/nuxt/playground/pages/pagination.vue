<script setup lang="ts">
const model = ref(2)
</script>

<template>
  <div class="space-y-2">
    <span>Current Page: {{ model }}</span>

    <NPagination
      v-model:page="model"
      :total="100"
      show-edges
    />
  </div>
</template>
