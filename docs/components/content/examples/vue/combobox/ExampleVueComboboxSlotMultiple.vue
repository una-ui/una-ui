<script setup lang="ts">
const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]
const selectedFrameworks = ref<typeof frameworks[number][]>([])
</script>

<template>
  <div class="flex">
    <NCombobox
      v-model="selectedFrameworks"
      :items="frameworks"
      by="value"
      multiple
      :_combobox-input="{
        placeholder: 'Select frameworks...',
      }"
      :_combobox-list="{
        class: 'w-300px',
        align: 'start',
      }"
    >
      <template #trigger="{ modelValue }">
        {{ modelValue?.length
          ? modelValue.map(val => {
            const framework = frameworks.find(f => f.value === val.value)
            return framework ? framework.label : val
          }).join(", ")
          : "Select frameworks..." }}
      </template>

      <template #item="{ item, selected }">
        <NCheckbox
          :model-value="selected"
          tabindex="-1"
          aria-hidden="true"
        />
        {{ item.label }}
      </template>
    </NCombobox>
  </div>
</template>
