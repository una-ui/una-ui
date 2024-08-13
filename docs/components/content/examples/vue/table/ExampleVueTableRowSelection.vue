<script setup lang="ts">
import rows from './rows'
import columns from './columns'

const select = ref()
</script>

<template>
  <div class="border border-base rounded-md">
    <NTable
      v-model="select"
      :columns
      :rows
      enable-row-selection
    />
  </div>
</template>
