<script setup lang="ts">
const home = ref({
  label: 'Get Started',
  url: '/getting-started',
})

const items = ref([
  { label: 'Components', url: '/components/accordion' },
  { label: 'Alert', url: '/components/alert' },
  { label: 'Breadcrumb', url: '/components/breadcrumb' },
])

const colors = ['#ffd45e', '#45ad2d', '#3b54c4', '#b156db', '#a6a2a3', '#ff7a97', '#a1612a'] as const

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
</script>

<template>
  <NBreadcrumb :home :items with-routing>
    <template #home="{ item }">
      <div flex="~ items-center" gap-2>
        <div :style="{ backgroundColor: getRandomColor() }" h-2 w-2 rounded-full />
        {{ item.label }}
      </div>
    </template>
    <template #separator>
      <NIcon name="i-heroicons:slash-20-solid" />
    </template>
    <template #item="{ item }">
      <div flex="~ items-center" gap-2>
        <div :style="{ backgroundColor: getRandomColor() }" h-2 w-2 rounded-full />
        {{ item.label }}
      </div>
    </template>
  </NBreadcrumb>
</template>
