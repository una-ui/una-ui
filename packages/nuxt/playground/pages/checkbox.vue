<script setup lang="ts">
const checked = ref(false)
const indeterminate = ref<boolean | 'indeterminate'>('indeterminate')
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NCheckbox v-model="checked" label="Checkbox" />

    <NCheckbox
      :model-value="indeterminate"
      label="Indeterminate"
      @update:model-value="indeterminate === true ? indeterminate = 'indeterminate' : indeterminate = true"
    />
  </div>
</template>
