<script setup lang="ts">
const checkbox = ref()
</script>

<template>
  <div class="flex gap-4">
    <NCheckbox v-model:checked="checkbox" label="Disabled" disabled />

    <NCheckbox v-model:checked="checkbox" label="Not disabled" />
  </div>
</template>
