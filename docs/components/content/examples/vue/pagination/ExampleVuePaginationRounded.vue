<script lang="ts" setup>
const currentPage = ref(1)
</script>

<template>
  <div class="flex flex-col">
    <NPagination
      v-model:page="currentPage"
      :total="100"
      pagination-selected="solid-white"
      pagination-unselected="ghost-gray"
      rounded="b-2xl"
    />

    <NSeparator />

    <NPagination
      v-model:page="currentPage"
      :total="100"
      pagination-selected="solid-orange"
      pagination-unselected="outline-white"
    />

    <NSeparator />

    <NPagination
      v-model:page="currentPage"
      :total="100"
      pagination-selected="solid-yellow"
      pagination-unselected="outline-white"
      rounded="t-full"
    />
  </div>
</template>
