<script setup lang="ts">
const rows = Array.from({ length: 24 }, (_, i) => `Row ${i + 1}`)
</script>

<template>
  <div class="w-full flex flex-wrap gap-6">
    <div class="flex flex-col gap-2">
      <span class="text-xs text-muted-foreground">scrollbar-thin</span>
      <div class="h-52 w-56 overflow-y-auto border rounded-lg p-4 scrollbar-thin">
        <div v-for="row in rows" :key="row" class="py-1 text-sm">
          {{ row }}
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <span class="text-xs text-muted-foreground">no-scrollbar</span>
      <div class="h-52 w-56 overflow-y-auto border rounded-lg p-4 no-scrollbar">
        <div v-for="row in rows" :key="row" class="py-1 text-sm">
          {{ row }}
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <span class="text-xs text-muted-foreground">scrollbar-gutter-stable</span>
      <div class="h-52 w-56 overflow-y-auto border rounded-lg p-4 scrollbar-thin scrollbar-gutter-stable">
        <div v-for="row in rows.slice(0, 3)" :key="row" class="py-1 text-sm">
          {{ row }}
        </div>
      </div>
    </div>
  </div>
</template>
