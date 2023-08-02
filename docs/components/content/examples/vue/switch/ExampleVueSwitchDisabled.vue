<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <div flex="~ col" gap-4>
    <NFormGroup :label="!enabled ? 'Clickable' : 'Not clickable'">
      <NSwitch
        v-model="enabled"
        :disabled="enabled"
      />
    </NFormGroup>

    <NFormGroup :label="enabled ? 'Clickable' : 'Not clickable'">
      <NSwitch
        v-model="enabled"
        :disabled="!enabled"
      />
    </NFormGroup>
  </div>
</template>
