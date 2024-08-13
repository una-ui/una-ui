<script setup lang="ts">
import rows from './rows'
import columns from './columns'

const search = ref('')
const select = ref()
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <NInput
        v-model="search"
        placeholder="Search"
        :una="{
          inputWrapper: 'w-full md:w-80',
        }"
      />

      <NButton
        label="Add new"
        leading="i-radix-icons-plus"
        class="w-full md:w-auto"
      />
    </div>

    <div class="border border-base rounded-md">
      <NTable
        v-model="select"
        :columns
        :global-filter="search"
        :rows
        enable-row-selection
      />
    </div>
  </div>
</template>
./data
