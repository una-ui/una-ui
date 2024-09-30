<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4">
    <NFormGroup :label="!enabled ? 'Clickable' : 'Disabled'">
      <NSwitch
        v-model:checked="enabled"
        :disabled="enabled"
      />
    </NFormGroup>

    <NFormGroup :label="enabled ? 'Clickable' : 'Disabled'">
      <NSwitch
        v-model:checked="enabled"
        :disabled="!enabled"
      />
    </NFormGroup>
  </div>
</template>
