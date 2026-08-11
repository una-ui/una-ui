<script setup lang="ts">
const tags = Array.from({ length: 20 }, (_, i) => `tag-${i + 1}`)
</script>

<template>
  <div class="w-full flex flex-col gap-6">
    <div class="w-full flex gap-3 overflow-x-auto border rounded-lg p-4 no-scrollbar scroll-fade-x">
      <div v-for="tag in tags" :key="tag" class="shrink-0 rounded-md bg-muted px-3 py-2 text-sm">
        {{ tag }}
      </div>
    </div>

    <div class="w-full flex gap-3 overflow-x-auto border rounded-lg p-4 no-scrollbar scroll-fade-e">
      <div v-for="tag in tags" :key="tag" class="shrink-0 rounded-md bg-muted px-3 py-2 text-sm">
        {{ tag }}
      </div>
    </div>
  </div>
</template>
