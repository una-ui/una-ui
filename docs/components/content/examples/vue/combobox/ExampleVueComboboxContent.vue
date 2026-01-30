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
  <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
    <NCombobox
      v-model="selectedFramework"
      :items="frameworks"
      :_combobox-input="{
        placeholder: 'Select framework...',
        autocomplete: 'off',
      }"
      :_combobox-list="{
        align: 'start',
        side: 'right',
      }"
      by="value"
      text-empty="No frameworks found."
    >
      <template #trigger>
        <template v-if="selectedFramework">
          {{ selectedFramework.label }}
        </template>
        <template v-else>
          Select framework...
        </template>
      </template>
    </NCombobox>
    <p className="text-sm font-medium leading-none">
      <span v-if="selectedFramework" className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-background">
        {{ selectedFramework.label }}
      </span>
      <span className="text-muted-foreground">Create a new project</span>
    </p>
  </div>
</template>
