<script setup lang="ts">
const toggleGroupModel = ref(['bold'])
</script>

<template>
  <NToggleGroup v-model="toggleGroupModel" type="multiple">
    <NToggleGroupItem value="bold" label="i-radix-icons-font-bold" />
    <NToggleGroupItem value="italic" label="i-radix-icons-font-italic" />
    <NToggleGroupItem value="underline" label="i-radix-icons-underline" />
  </NToggleGroup>
</template>
