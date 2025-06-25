<script setup lang="ts">
const value = ref<string[]>([])
</script>

<template>
  <div class="overflow-x-auto space-y-4">
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
      size="4xl"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      pin-input="~"
      size="50px"
    />
  </div>
</template>
