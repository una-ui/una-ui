<script setup lang="ts">
/**
 * @name NSelect
 *
 * @todo
 * - [] Add select props
 * - [] Add select functionality
 * - [] Add select presets
 * - [] Add dynamic colors
 * - [] Add dynamic sizes
 * - [] NFormGroup integration
 * - [] Add disabled state
 * - [] Add select slots
 * - [] Add select documentation
 * - [] Add select markdown
 * - [] Add select examples
 */
const items = ref(['Banana', 'Rambutan', 'Apple', 'Papaya'])
const item = ref()
const toggleDisable = ref(false)
</script>

<template>
  <NCheckbox v-model="toggleDisable" label="disable" />
  <NSelect v-model="item" :options="items" :disabled="toggleDisable" placeholder="sample" />
</template>
