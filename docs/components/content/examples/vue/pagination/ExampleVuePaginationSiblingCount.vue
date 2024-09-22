<script lang="ts" setup>
const currentPage = ref(1)
</script>

<template>
  <div class="flex flex-col space-y-4">
    <NPagination
      v-model:page="currentPage"
      :total="300"
      :sibling-count="3"
    />
    <NPagination
      v-model:page="currentPage"
      :total="300"
      :sibling-count="1"
    />
  </div>
</template>
