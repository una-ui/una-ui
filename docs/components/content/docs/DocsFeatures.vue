<script setup lang="ts">
const items = [{
  icon: '🔥',
  title: 'High Quality Presets',
  description: 'A set of high quality presets for your next project. No more boilerplates.',
}, {
  icon: '🎨',
  title: 'Themeable',
  description: 'Built-in theming system support. Dark mode ready. Customizable.',
}, {
  icon: '🚀',
  title: 'Crafted Components',
  description: 'A set of crafted components for Vue 3 with TypeScript support.',
}, {
  icon: '⚡',
  title: 'Lightweight',
  description: 'Built with performance in mind. And powered by Unocss style engine.',
}, {
  icon: '🔌',
  title: 'Extendable & Hackable',
  description: 'Use your own components. Use your own theme. Use your own style.',
}, {
  icon: '🌘',
  title: 'Auto Dark Mode',
  description: 'Auto dark mode support based on prefer color-scheme.',
}]
</script>

<template>
  <div class="flex flex-col space-y-6">
    <NLink to="#sponsors" class="cursor-pointer">
      <h2 id="sponsors" class="text-3xl font-bold">
        Features
      </h2>
    </NLink>

    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
      <CommonCardFeature
        v-for="item in items"
        :key="item.title"
        v-bind="item"
      />
    </div>
  </div>
</template>
