<script setup lang="ts">
const components = [
  'Accordion',
  'Avatar',
  'Breadcrumb',
  'Card',
  'Collapsible',
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
  'Button',
  'Toast',
  'Toggle',
  'Tooltip',
  'Sonner',
]
  .map(component => ({
    name: component.replaceAll(' ', ''),
    to: `/${component.toLowerCase().replaceAll(' ', '-')}`,
  }))
  .sort((a, b) => a.name.localeCompare(b.name))
</script>

<template>
  <div class="relative grid grid-cols-12 h-screen w-screen flex gap-4 bg-base p-4 p-6 container">
    <!-- aside -->
    <div class="col-span-5 h-full flex flex-col border p-6">
      <p class="mb-4 font-bold">
        Components
      </p>
      <NButton
        v-for="component in components"
        :key="component.name"
        :to="component.to"
        :label="component.name"
        :btn="$route.path === component.to ? 'link-black' : 'link-gray'"
        class="justify-start px-0"
      />
    </div>

    <!-- main -->
    <main class="col-span-7 w-full overflow-y-auto border">
      <div class="flex flex-col items-center gap-2 border-b p-6">
        <h1 class="text-3xl text-primary-active font-bold">
          <span class="dark:drop-shadow-[0_0_0.1mm_rgb(var(--c-primary))text-nowrap text-base font-bold drop-shadow-lg">
            Una
            <span class="text-primary-active">UI</span>
          </span>
          Playground
        </h1>
        <p class="text-lg">
          This is a playground for testing UnaUI features.
        </p>

        <div class="flex gap-2">
          <ColorMode />
          <NThemeSwitcher />
        </div>
      </div>

      <div class="w-full flex justify-center p-20">
        <NuxtPage />
      </div>
    </main>
  </div>
  <NToaster />
  <NSonner />
</template>
