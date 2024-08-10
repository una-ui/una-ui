<script setup lang="ts">
const icons1 = [
  { _id: '0', name: 'i-heroicons:bold-solid' },
  { _id: '1', name: 'i-heroicons:italic-solid' },
  { _id: '2', name: 'i-heroicons:underline-20-solid' },
  { _id: '3', name: 'i-heroicons:strikethrough-20-solid' },
]
const icons2 = [
  { _id: '0', name: 'i-heroicons:list-bullet-16-solid' },
  { _id: '1', name: 'i-heroicons:numbered-list' },
]
const icons3 = [
  { _id: '0', name: 'i-heroicons:link-solid' },
  { _id: '1', name: 'i-heroicons:code-bracket-16-solid' },
]
</script>

<template>
  <div mb-6 flex="~ items-center" gap-1>
    <NIcon v-for="icon in icons1" :key="icon._id" :name="icon.name" />
    <NDivider direction="vertical" mx-2 />
    <NIcon v-for="icon in icons2" :key="icon._id" :name="icon.name" />
    <NDivider direction="vertical" mx-2 />
    <NIcon v-for="icon in icons3" :key="icon._id" :name="icon.name" />
  </div>
  <div flex="~ col">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <NDivider />
    <p>Pariatur excepturi assumenda quia reprehenderit nisi autem. </p>
  </div>
</template>
