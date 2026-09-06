<script setup lang="ts">
const rows = Array.from({ length: 24 }, (_, i) => `Row ${i + 1}`)
</script>

<template>
  <div class="w-full flex flex-wrap gap-6">
    <div class="h-56 w-56 overflow-y-auto border rounded-lg p-4 scrollbar-thin scroll-fade">
      <div v-for="row in rows" :key="row" class="py-1 text-sm">
        {{ row }}
      </div>
    </div>

    <div class="h-56 w-56 overflow-y-auto border rounded-lg p-4 scrollbar-thin scroll-fade-b">
      <div v-for="row in rows" :key="row" class="py-1 text-sm">
        {{ row }}
      </div>
    </div>

    <div class="h-56 w-56 overflow-y-auto border rounded-lg p-4 scrollbar-thin scroll-fade-t">
      <div v-for="row in rows" :key="row" class="py-1 text-sm">
        {{ row }}
      </div>
    </div>
  </div>
</template>
