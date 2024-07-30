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

const options = [
  { fruit: 'Apple', price: '$1.00' },
  { fruit: 'Banana', price: '$2.00' },
  { fruit: 'Blueberry', price: '$3.00' },
  { fruit: 'Grapes', price: '$4.00' },
  { fruit: 'Pineapple', price: '$5.00' },
]
const vegetables = [
  { fruit: 'Aubergine', price: '$1.50' },
  { fruit: 'Broccoli', price: '$2.30' },
  { fruit: 'Carrot', price: '$0.75' },
  { fruit: 'Courgette', price: '$1.80' },
  { fruit: 'Leek', price: '$1.20' },
]
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
    <NFormGroup>
      <NCheckbox v-model="toggleDisable" label="disable" />
      <NInput />
      <div class="w-50">
        {{ item }}
        <NSelect
          v-model="item"
          :items
          placeholder="Select an item"
          label="Items Available"
          multiple-group
          :disabled="toggleDisable"
          item-attribute="price"
        />
      </div>
      <NButton label="Submit" type="submit" />
    </NFormGroup>
  </div>
</template>
