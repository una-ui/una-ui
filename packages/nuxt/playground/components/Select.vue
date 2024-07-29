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

const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek']

const items = [
  {
    label: 'Fruits',
    items: options,
    selectLabel: {
      class: 'text-fuchsia',
    },
    selectItem: {
      class: 'text-red',
    },
  },
  {
    label: 'Vegetables',
    items: vegetables,
    selectLabel: {
      class: 'text-success',
    },
  },
]
const item = ref()
const toggleDisable = ref(false)
</script>

<template>
  <div class="flex gap-4">
    <NCheckbox v-model="toggleDisable" label="disable" />
    <NInput />
    <div class="w-50">
      <NSelect
        v-model="item"
        :items
        placeholder="Select an item"
        label="Items Available"
        multiple-group
        :disabled="toggleDisable"
      />
    </div>

    <NButton label="Submit" />
  </div>
</template>
