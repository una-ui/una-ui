<script setup lang="ts">
const value = ref<string[]>([])
</script>

<template>
  <div class="flex flex-col gap-4">
    <NPinInput
      v-model="value"
      placeholder="○"
      pin-input="solid-primary"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      pin-input="solid-error"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      pin-input="solid-warning"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      pin-input="outline-info"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      pin-input="outline-success"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      pin-input="~"
    />
  </div>
</template>
