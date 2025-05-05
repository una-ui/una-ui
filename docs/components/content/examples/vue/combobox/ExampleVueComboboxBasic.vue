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
  <div class="flex">
    <NCombobox
      v-model="selectedFramework"
      :items="frameworks"
      :_combobox-input="{
        placeholder: 'Select framework...',
        autocomplete: 'off',
      }"
      by="value"
      text-empty="No frameworks found."
    />
  </div>
</template>
