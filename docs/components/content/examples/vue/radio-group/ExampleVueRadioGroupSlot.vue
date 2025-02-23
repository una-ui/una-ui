<script setup lang="ts">
const options = [
  {
    id: 'r1',
    value: 'default',
    label: 'Default',
    description: 'System default spacing',
    radioGroup: 'lime',
    icon: 'i-lucide-layout-template',
  },
  {
    id: 'r2',
    value: 'comfortable',
    label: 'Comfortable',
    description: 'More room to breathe',
    radioGroup: 'orange',
    icon: 'i-lucide-layout',
  },
  {
    id: 'r3',
    value: 'compact',
    label: 'Compact',
    description: 'Maximum content density',
    radioGroup: 'pink',
    icon: 'i-lucide-layout-dashboard',
  },
]
</script>

<template>
  <NRadioGroup
    default-value="comfortable"
    orientation="horizontal"
    class="flex flex-col gap-4 sm:flex-row"
  >
    <NLabel
      v-for="option in options"
      :key="option.id"
      :for="option.id"
      class="flex cursor-pointer items-start border rounded-lg p-4 transition-colors space-x-3 hover:bg-gray-50 dark:hover:bg-gray-900"
    >
      <NRadioGroupItem
        :id="option.id"
        :radio-group="option.radioGroup"
        rounded="sm"
        size="4xl"
        :value="option.value"
      >
        <template #icon>
          <NIcon :name="option.icon" size="2xl" />
        </template>
      </NRadioGroupItem>

      <div class="space-y-1">
        <span class="block font-medium">
          {{ option.label }}
        </span>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ option.description }}
        </p>
      </div>
    </NLabel>
  </NRadioGroup>
</template>
