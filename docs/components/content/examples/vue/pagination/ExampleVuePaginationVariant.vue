<script lang="ts" setup>
const currentPage = ref(1)
</script>

<template>
  <div class="flex flex-col">
    <NPagination
      v-model:page="currentPage"
      :items-per-page="10"
      :total="100"
      pagination-selected="solid-black"
      pagination-unselected="ghost-gray"
      show-edges
    />

    <NSeparator />

    <NPagination
      v-model:page="currentPage"
      :items-per-page="10"
      :total="100"
      pagination-selected="soft-primary"
      pagination-unselected="link-primary"
      pagination-ellipsis="text-primary"
      show-edges
    />

    <NSeparator />

    <NPagination
      v-model:page="currentPage"
      :items-per-page="10"
      :total="100"
      pagination-selected="solid-pink"
      pagination-unselected="outline-pink"
      pagination-ellipsis="text-pink"
      show-edges
    />

    <NSeparator />

    <NPagination
      v-model:page="currentPage"
      :items-per-page="10"
      :total="100"
      pagination-selected="solid-indigo"
      pagination-unselected="soft-indigo"
      pagination-ellipsis="text-indigo"
      show-edges
    />
  </div>
</template>
