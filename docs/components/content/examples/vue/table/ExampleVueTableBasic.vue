<script setup lang="ts">
import rows from './rows'
import columns from './columns'

const search = ref('')
</script>

<template>
  <div class="border border-base rounded-md">
    <NTable
      :columns
      :rows
      :global-filter="search"
    />
  </div>
</template>
