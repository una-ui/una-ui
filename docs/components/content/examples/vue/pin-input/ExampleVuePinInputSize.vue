<script setup lang="ts">
const value = ref(['1', '2', '3', '4', '5', '6'])
</script>

<template>
  <div class="grid grid-cols-1 gap-4 overflow-x-auto sm:grid-cols-2">
    <NPinInput
      v-model="value"
      placeholder="○"
      size="xs"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      size="md"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      size="lg"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      size="xl"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      size="2xl"
    />
  </div>
</template>
