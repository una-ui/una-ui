<script setup lang="ts">
const value = ref(['1', '2', '3', '4', '5', '6'])
</script>

<template>
  <div class="grid grid-cols-1 gap-4 overflow-x-auto sm:grid-cols-2">
    <NPinInput
      v-model="value"
      placeholder="○"
      separator="i-lucide-minus"
      :group-by="3"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      separator="i-ph-star-fill text-warning"
      :group-by="3"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      separator="i-ph-circle-fill text-success"
      :group-by="3"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      separator="i-ph-triangle-fill text-info"
      :group-by="3"
    />

    <NPinInput
      v-model="value"
      placeholder="○"
      separator="i-ph-square-fill text-error"
      :group-by="3"
    />
  </div>
</template>
