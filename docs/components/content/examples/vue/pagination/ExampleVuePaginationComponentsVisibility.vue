<script setup lang="ts">
const currentPage = ref(1)
</script>

<template>
  <div space-y-4>
    <span>Current Page: {{ currentPage }}</span>

    <NPagination
      v-model:page="currentPage"
      :total="100"
      :show-list-item="false"
    />
  </div>
</template>
