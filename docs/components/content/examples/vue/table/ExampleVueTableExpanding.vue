<script setup lang="ts">
import rows from './rows'
import columns from './columns'

const expanded = ref<Record<string, boolean>>({})
</script>

<template>
  <div class="border border-base rounded-md">
    <NTable
      v-model:expanded="expanded"
      :columns
      :rows
    >
      <template #expanded="{ row }">
        <div class="p-4">
          <p class="text-sm text-neutral">
            Object:
          </p>
          <p class="text-base">
            {{ row }}
          </p>
        </div>
      </template>
    </NTable>
  </div>
</template>
