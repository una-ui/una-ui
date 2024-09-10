<script setup lang="ts">
const checked = ref<'indeterminate' | boolean>('indeterminate')
</script>

<template>
  <NCheckbox
    v-model:checked="checked"
    label="Indeterminate"
  />
</template>
