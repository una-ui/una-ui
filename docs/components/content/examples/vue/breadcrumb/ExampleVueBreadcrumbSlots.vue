<script setup lang="ts">
const items = ref([
  { label: 'Components', to: '/components/accordion' },
  { label: 'Alert', to: '/components/alert' },
  { label: 'Breadcrumb', to: '/components/breadcrumb' },
])

const colors = ['#ffd45e', '#45ad2d', '#3b54c4', '#b156db', '#a6a2a3', '#ff7a97', '#a1612a'] as const

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
</script>

<template>
  <NBreadcrumb :items>
    <template #separator>
      <NSeparator orientation="vertical" class="h-10" />
    </template>

    <template #default="{ item }">
      <div class="flex items-center gap2">
        <div
          :style="{ backgroundColor: getRandomColor() }"
          class="h-2 w-2 rounded-full"
        />
        {{ item.label }}
      </div>
    </template>
  </NBreadcrumb>
</template>
