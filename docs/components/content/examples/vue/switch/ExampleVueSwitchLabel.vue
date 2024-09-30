<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <NFormGroup :label="enabled ? 'Toggled on' : 'Toggled off'">
    <NSwitch
      v-model:checked="enabled"
    />
  </NFormGroup>
</template>
