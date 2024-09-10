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
  { fruit: 'Courgette', price: '$1.80', _selectItem: {
    disabled: true,
  } },
  { fruit: 'Leek', price: '$1.20' },
]

const items1 = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
const items = [
  {
    label: 'Fruits',
    items: options,
    _selectItem: {
      selectItem: 'purple',
    },
    _selectLabel: {
      class: 'text-fuchsia',
    },
  },
  {
    label: 'Vegetables',
    items: vegetables,
    _selectItem: {
      selectItem: 'lime',
    },
    _selectLabel: {
      class: 'text-success',
    },
  },
]
const item = ref()
const toggleDisable = ref(false)
</script>

<template>
  <div class="flex flex-col gap-4">
    <NCheckbox v-model:checked="toggleDisable" label="disable" />
    <NInput />
    <NSelect
      v-model="item"
      :items="items1"
      placeholder="Select an item"
      :disabled="toggleDisable"
      :_selectTrigger="{
        trailing: 'i-lucide-chevron-down',
        una: {
          btnTrailing: 'text-primary',
        },
      }"
      :_selectItem="{
        selectItem: 'orange',
      }"
    />
    {{ item }}

    <NSelect
      v-model="item"
      :items="options"
      placeholder="Select an item"
      label="Items Available"
      :disabled="toggleDisable"
      :_select-item="{
        selectItem: 'orange',
      }"
      item-attribute="fruit"
    >
      <template #item="{ item }">
        <div class="flex justify-between">
          <span>{{ item?.fruit }} - {{ item?.price }}</span>
        </div>
      </template>
    </NSelect>

    <NFormGroup
      label="Select an item"
    >
      <NSelect
        v-model="item"
        :items
        placeholder="Select an item"
        label="Items Available"
        :disabled="toggleDisable"
        item-attribute="fruit"
        multiple-group
      />
      <NButton label="Submit" type="submit" />
    </NFormGroup>
  </div>
</template>
