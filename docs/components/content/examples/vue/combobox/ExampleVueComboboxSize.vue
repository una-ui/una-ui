<script setup lang="ts">
const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]
const selectedFramework = ref<typeof frameworks[number]>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <NCombobox
      v-model="selectedFramework"
      size="xs"
      :items="frameworks"
      :_combobox-input="{
        placeholder: 'Select framework...',
        autocomplete: 'off',
      }"
      class="flex"
      by="value"
    >
      <template #trigger="{ modelValue }">
        <template v-if="modelValue">
          {{ modelValue }}
        </template>
        <template v-else>
          Select Framework
        </template>
      </template>
    </NCombobox>

    <NCombobox
      v-model="selectedFramework"
      size="sm"
      :items="frameworks"
      :_combobox-input="{
        placeholder: 'Select framework...',
        autocomplete: 'off',
      }"
      class="flex"
      by="value"
    >
      <template #trigger="{ modelValue }">
        <template v-if="modelValue">
          {{ modelValue }}
        </template>
        <template v-else>
          Select Framework
        </template>
      </template>
    </NCombobox>

    <NCombobox
      v-model="selectedFramework"
      size="md"
      :items="frameworks"
      :_combobox-input="{
        placeholder: 'Select framework...',
        autocomplete: 'off',
      }"
      class="flex"
      by="value"
    >
      <template #trigger="{ modelValue }">
        <template v-if="modelValue">
          {{ modelValue }}
        </template>
        <template v-else>
          Select Framework
        </template>
      </template>
    </NCombobox>
  </div>
</template>
