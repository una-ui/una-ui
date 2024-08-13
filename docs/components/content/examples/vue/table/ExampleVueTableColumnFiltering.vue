<script setup lang="ts">
import rows from './rows'
import columns from './columns'
</script>

<template>
  <div class="border border-base rounded-md">
    <NTable
      :columns
      enable-column-filters
      :rows
    />
  </div>
</template>
