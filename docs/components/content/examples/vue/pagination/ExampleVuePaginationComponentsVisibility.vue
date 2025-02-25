<script setup lang="ts">
const currentPage = ref(1)
</script>

<template>
  <div class="flex flex-col space-y-4">
    <span>Current Page: {{ currentPage }}</span>

    <NPagination
      v-model:page="currentPage"
      :items-per-page="10"
      :total="100"
      :show-list-item="false"
    />
  </div>
</template>
