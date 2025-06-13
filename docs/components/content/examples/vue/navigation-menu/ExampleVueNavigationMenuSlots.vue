<script setup lang="ts">
const items = [
  {
    slot: 'features',
    label: 'Features',
    trailing: 'i-lucide-chevron-down',
    items: [
      {
        label: 'Atomic Design',
        description: 'Consistent, maintainable UI components',
        to: '#features/atomic-design',
      },
      {
        label: 'Responsive',
        description: 'Works on all device sizes',
        to: '#features/responsive',
      },
      {
        label: 'Themeable',
        description: 'Customize with your own themes',
        to: '#features/themeable',
      },
    ],
  },
  {
    slot: 'components',
    label: 'Components',
    trailing: 'i-lucide-chevron-down',
    items: [
      {
        label: 'Buttons',
        description: 'Interactive button elements',
        to: '#components/buttons',
      },
      {
        label: 'Cards',
        description: 'Content containers with various styles',
        to: '#components/cards',
      },
      {
        label: 'Forms',
        description: 'Input components and validation',
        to: '#components/forms',
      },
    ],
  },
  {
    slot: 'resources',
    label: 'Resources',
    trailing: 'i-lucide-chevron-down',
    items: [
      {
        label: 'Documentation',
        description: 'Guides and API references',
        to: '#resources/docs',
      },
      {
        label: 'Examples',
        description: 'Sample code and demos',
        to: '#resources/examples',
      },
    ],
  },
]
</script>

<template>
  <div class="flex items-center justify-center p-2">
    <NNavigationMenu
      :items="items"
      indicator
      class="z-20"
      :_navigation-menu-viewport="{
        class: 'left-1/2 translate-x--1/2',
      }"
    >
      <template #trigger="{ item }">
        <div class="flex items-center gap-1.5 font-medium">
          {{ item.label }}
        </div>
      </template>

      <!-- Features content -->
      <template #features-content="{ items: featureItems }">
        <div class="w-[480px] overflow-hidden rounded-md p-5 shadow-md">
          <div class="grid grid-cols-[1fr_1fr] gap-6">
            <div>
              <h3 class="mb-3 text-lg text-amber-600 font-medium dark:text-amber-400">
                Features
              </h3>
              <NNavigationMenuContentItem
                v-for="item in featureItems"
                :key="item.label"
                v-bind="item"
                class="py-1.5"
                :una="{
                  navigationMenuContentItemLabel: 'font-medium',
                  navigationMenuContentItemDescription: 'text-sm text-gray-600 dark:text-gray-400',
                }"
              />
            </div>
            <img
              src="https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Code editor"
              class="h-full w-full rounded-md object-cover"
            >
          </div>
        </div>
      </template>

      <!-- Components content -->
      <template #components-content="{ items: componentItems }">
        <div class="bg-card w-[500px] rounded-md p-6 shadow-md">
          <div class="mb-5">
            <h3 class="mb-2 text-xl text-primary font-semibold">
              UI Components
            </h3>
            <p class="text-sm text-muted-foreground">
              Explore our comprehensive collection of customizable, accessible components.
            </p>
          </div>

          <div class="flex items-start gap-6">
            <div class="w-44 space-y-4">
              <img
                src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="UI Components"
                class="h-36 w-full rounded-md object-cover shadow-sm"
              >
              <div class="rounded-md bg-primary/10 p-3">
                <span class="mb-1 block text-xs text-primary font-medium">New Release</span>
                <p class="text-xs text-muted-foreground">
                  Check out our latest components with improved accessibility and animations.
                </p>
              </div>
            </div>

            <div class="flex-1 space-y-3.5">
              <h4 class="text-sm text-muted-foreground font-medium tracking-wide uppercase">
                Core Components
              </h4>
              <div class="grid grid-cols-1 gap-2">
                <NNavigationMenuContentItem
                  v-for="item in componentItems"
                  :key="item.label"
                  v-bind="item"
                  class="rounded-md hover:bg-accent p-2.5 transition-colors"
                  :una="{
                    navigationMenuContentItemLabel: 'font-medium text-foreground',
                    navigationMenuContentItemDescription: 'text-sm text-muted-foreground mt-0.5',
                  }"
                />
              </div>

              <div class="mt-2 border-t border-border pt-2">
                <NLink class="mt-1 inline-flex items-center text-sm text-primary font-medium hover:underline" to="/components">
                  <span>View all components</span>
                  <span class="i-lucide-arrow-right ml-1 h-3.5 w-3.5" />
                </NLink>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Resources content -->
      <template #resources-content="{ items: resourceItems }">
        <div class="w-[480px] overflow-hidden rounded-md shadow-md">
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Coding workspace"
              class="h-44 w-full object-cover object-center"
            >
            <div class="absolute inset-0 from-black/70 to-transparent bg-gradient-to-t" />
            <div class="absolute bottom-0 left-0 w-full p-5">
              <h3 class="mb-3 text-lg text-white font-medium">
                Resources
              </h3>
              <div class="grid grid-cols-2 gap-3">
                <NNavigationMenuContentItem
                  v-for="item in resourceItems"
                  :key="item.label"
                  v-bind="item"
                  class="rounded-md bg-foreground/10 p-3 backdrop-blur-sm hover:bg-foreground/20"
                  :una="{
                    navigationMenuContentItemLabel: 'font-medium text-white',
                    navigationMenuContentItemDescription: 'text-sm text-gray-200',
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </NNavigationMenu>
  </div>
</template>
