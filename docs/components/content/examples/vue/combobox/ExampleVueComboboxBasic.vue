<script setup lang="ts">
const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]
const selectedFramework = ref()
</script>

<template>
  <div class="max-w-xs w-full">
    <NCombobox
      v-model="selectedFramework"
      :items="frameworks"
      :_combobox-input="{
        placeholder: 'Select framework...',
      }"
      by="value"
    />
  </div>
</template>
