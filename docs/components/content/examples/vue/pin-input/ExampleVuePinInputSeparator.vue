<script setup lang="ts">
const value = ref<string[]>([])
</script>

<template>
  <div class="flex flex-col gap-4 overflow-x-auto">
    <NPinInput
      v-model="value"
      placeholder="○"
      separator="i-lucide-minus"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      separator="i-ph-star-fill text-warning"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      separator="i-ph-circle-fill text-success"
    />
    <NPinInput
      v-model="value"
      placeholder="○"
      separator="i-ph-triangle-fill text-info"
    />
    <NPinInput
      v-model="value"
      placeholder="○"
      separator="i-ph-square-fill text-error"
    />
  </div>
</template>
