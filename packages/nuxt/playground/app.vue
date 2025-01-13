<script setup lang="ts">
const components = [
  'Accordion',
  'Avatar',
  'Breadcrumb',
  'Card',
  'Collapsible',
  'Color Mode',
  'Dialog',
  'Dropdown Menu',
  'Extractor',
  'Forms',
  'Pagination',
  'Popover',
  'Progress',
  'Radio',
  'Radio Group',
  'Select',
  'Separator',
  'Skeleton',
  'Slider',
  'Switch',
  'Tabs',
  'Table',
  'Button Tester',
  'Toast',
  'Toggle',
  'Tooltip',
]
  .map(component => ({
    name: component.replaceAll(' ', ''),
    to: `/${component.toLowerCase().replaceAll(' ', '-')}`,
  }))
  .sort((a, b) => a.name.localeCompare(b.name))
</script>

<template>
  <div class="relative h-screen w-screen flex items-center bg-base p-4 pt-10">
    <div class="absolute left-12 max-w-64 flex flex-col justify-center xl:left-1/10">
      <p class="mb-4 font-bold">
        Components
      </p>
      <div class="max-h-2xl flex flex-col overflow-y-auto pr-15">
        <NButton
          v-for="component in components"
          :key="component.name"
          :to="component.to"
          :label="component.name"
          :btn="$route.path === component.to ? 'link-black' : 'link-gray'"
          class="justify-start px-0"
        />
      </div>
    </div>
    <div class="h-full w-full flex flex-col items-center justify-between gap-4">
      <div class="flex flex-col items-center gap-2">
        <h1 class="text-3xl font-bold">
          <span class="dark:drop-shadow-[0_0_0.1mm_rgb(var(--c-primary))text-nowrap text-base font-bold drop-shadow-lg">
            Una
            <span class="text-primary-active">UI</span>
          </span>
          Playground
        </h1>
        <p class="text-lg">
          This is a playground for testing UnaUI features.
        </p>
      </div>
      <div class="mx-auto max-w-2xl w-full flex flex-col items-center gap-2">
        <NuxtPage />
      </div>
      <div>
        <NThemeSwitcher />
      </div>
    </div>
  </div>
  <NToaster />
</template>
