<script setup lang="ts">
const options = [
  { label: 'Multiple', value: 'multiple' },
  { label: 'Single', value: 'single' },
]
const group = [
  { value: 'bold', label: 'i-radix-icons-font-bold' },
  { value: 'italic', label: 'i-radix-icons-font-italic' },
  { value: 'underline', label: 'i-radix-icons-underline' },
]

const radioValue = ref<'multiple' | 'single'>('multiple')
const toggleGroupModel = ref(null)

watch(radioValue, () => {
  toggleGroupModel.value = null
})
</script>

<template>
  <div class="flex flex-col flex-wrap gap-4">
    <NRadioGroup
      v-model="radioValue"
      :items="options"
      orientation="horizontal"
    />
    <NToggleGroup v-model="toggleGroupModel" :items="group" :type="radioValue" />
  </div>
</template>
