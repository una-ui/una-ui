<script setup lang="ts">
// import { z } from 'zod'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]
const selectedFramework = ref()
const selectedFrameworks = ref([])

// Simple string-based values for clearer debugging
const users = [
  { id: '1', username: 'shadcn' },
  { id: '2', username: 'leerob' },
  { id: '3', username: 'evilrabbit' },
]
const selectedUser = ref()
</script>

<template>
  <div class="flex items-center gap-4">
    <NCombobox
      v-model="selectedFramework"
      :items="frameworks"
      :_combobox-input="{
        placeholder: 'Select framework...',
      }"
      by="label"
    />

    <NCombobox
      v-model="selectedUser"
      :items="users"
      by="username"
      :_combobox-input="{
        placeholder: 'Select user...',
      }"
    />

    <NCombobox
      v-model="selectedFrameworks"
      :items="frameworks"
      by="label"
      multiple
      :_combobox-input="{
        placeholder: 'Select frameworks (multi-select)...',
      }"
      :_combobox-list="{
        class: 'w-300px',
        align: 'start',
      }"
      :_combobox-anchor="{
      }"
    >
      <template #trigger>
        <NButton btn="solid-white" class="w-full justify-between">
          {{ selectedFrameworks?.length > 0
            ? selectedFrameworks.map(val => {
              const framework = frameworks.find(f => f.value === val)
              return framework ? framework.label : val
            }).join(", ")
            : "Select frameworks (multi-select)..." }}
          <NIcon name="i-lucide-chevron-down" class="ml-2 shrink-0 opacity-50 square-4" />
        </NButton>
      </template>
    </NCombobox>

    <!-- <NCombobox
      v-model="selectedFrameworks"
      multiple
      :items="frameworks"
      by="label"
    >
      <template #list-footer>
        <NComboboxSeparator />

        <NComboboxGroup>
          <NComboboxItem :value="null">
            <slot name="create">
              <NIcon name="i-lucide-plus-circle" size="1.1em" />
              Create timezone
            </slot>
          </NComboboxItem>
        </NComboboxGroup>
      </template>
    </NCombobox> -->
  </div>
</template>
