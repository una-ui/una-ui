<script setup lang="ts">
const icons1 = ref([
  { _id: '0', name: 'i-heroicons-bold-solid', value: true },
  { _id: '1', name: 'i-heroicons-italic-solid', value: false },
  { _id: '2', name: 'i-heroicons:underline-20-solid', value: true },
  { _id: '3', name: 'i-heroicons-strikethrough-20-solid', value: false },
])
const icons2 = ref([
  { _id: '0', name: 'i-heroicons-list-bullet-16-solid', value: true },
  { _id: '1', name: 'i-heroicons-numbered-list', value: false },
])
const icons3 = ref([
  { _id: '0', name: 'i-heroicons-link-solid', value: true },
  { _id: '1', name: 'i-heroicons-code-bracket-16-solid', value: false },
])

const textarea = ref('')
</script>

<template>
  <div class="flex items-center gap-1">
    <NToggle
      v-for="icon in icons1"
      :key="icon._id"
      v-model:pressed="icon.value"
      :label="icon.name"
      size="xs"
    />

    <NSeparator orientation="vertical" class="mx-2 h-7" />

    <NToggle
      v-for="icon in icons2"
      :key="icon._id"
      v-model:pressed="icon.value"
      :label="icon.name"
      size="xs"
    />

    <NSeparator orientation="vertical" class="mx-2 h-7" />

    <NToggle
      v-for="icon in icons3"
      :key="icon._id"
      v-model:pressed="icon.value"
      :label="icon.name"
      size="xs"
    />
  </div>

  <NSeparator />

  <NInput
    v-model="textarea"
    type="textarea"
    placeholder="Type something..."
  />
</template>
