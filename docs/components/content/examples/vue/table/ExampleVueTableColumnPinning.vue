<script setup lang="ts">
import rows from './rows'
import columns from './columns'
</script>

<template>
  <!-- table -->
  <div class="border border-base rounded-md">
    <NTable
      :columns
      :rows
      :column-pinning="{
        left: ['status'],
        right: ['priority'],
      }"
    />
  </div>
</template>
./data
