<script setup lang="ts">
const checked = ref(false)
</script>

<template>
  <NCheckbox v-model:checked="checked" label="Checkbox" />
</template>
