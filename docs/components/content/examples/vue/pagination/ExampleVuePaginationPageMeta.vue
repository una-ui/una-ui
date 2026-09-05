<script setup lang="ts">
const page = ref(1)
const itemsPerPage = ref(10)
</script>

<template>
  <div class="flex flex-col space-y-4">
    <span>Page {{ page }}, {{ itemsPerPage }} per page</span>

    <NPagination
      v-model:page="page"
      v-model:items-per-page="itemsPerPage"
      :total="40"
      :show-first="false"
      :show-last="false"
      show-info
      show-rows-per-page
      show-edges
      :_pagination-info="{ format: 'range' }"
      :_pagination-rows-per-page="{ label: 'Rows per page' }"
    />
  </div>
</template>
