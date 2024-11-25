<script setup lang="ts">
const checked = ref(false)
const indeterminate = ref<boolean | 'indeterminate'>('indeterminate')
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NCheckbox v-model:checked="checked" label="Checkbox" />

    <NCheckbox
      :checked="indeterminate"
      label="Indeterminate"
      @update:checked="indeterminate === true ? indeterminate = 'indeterminate' : indeterminate = true"
    />
  </div>
</template>
