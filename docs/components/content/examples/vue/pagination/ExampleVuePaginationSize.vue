<script lang="ts" setup>
const currentPage = ref(1)
</script>

<template>
  <div class="flex flex-col space-y-4">
    <NPagination
      v-model:page="currentPage"
      :total="100"
      size="xs"
    />

    <NPagination
      v-model:page="currentPage"
      :total="100"
      size="sm"
    />

    <NPagination
      v-model:page="currentPage"
      :total="100"
      size="md"
    />

    <NPagination
      v-model:page="currentPage"
      :total="100"
      size="lg"
    />
  </div>
</template>
