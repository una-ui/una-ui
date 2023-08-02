<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <NFormGroup :label="enabled ? 'Enabled' : 'Disabled'">
    <NSwitch
      v-model="enabled"
    />
  </NFormGroup>
</template>
