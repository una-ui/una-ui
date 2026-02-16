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
  <NCombobox
    v-model="selectedFramework"
    by="value"
  >
    <NComboboxAnchor as-child>
      <NComboboxTrigger class="w-[200px]">
        {{ selectedFramework?.label ?? 'Select framework...' }}
      </NComboboxTrigger>
    </NComboboxAnchor>

    <NComboboxList>
      <NComboboxInput
        class="border-0 border-b-1 rounded-none placeholder:text-gray-500 focus-visible:ring-0"
        placeholder="Select framework..."
      />

      <NComboboxEmpty>
        No framework found.
      </NComboboxEmpty>

      <NComboboxGroup>
        <NComboboxItem
          v-for="framework in frameworks"
          :key="framework.value"
          :value="framework"
        >
          {{ framework.label }}

          <NComboboxItemIndicator>
            <NIcon name="i-lucide-check" />
          </NComboboxItemIndicator>
        </NComboboxItem>
      </NComboboxGroup>
    </NComboboxList>
  </NCombobox>
</template>
