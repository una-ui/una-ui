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
  <div flex="~ items-center" mb-6 h-5 gap-1>
    <NButton
      v-for="icon in icons1"
      :key="icon._id"
      :btn="`${icon.value ? 'soft-gray' : 'text-gray'} square`"
      icon
      :label="icon.name"
      @click="icon.value = !icon.value"
    />

    <NSeparator orientation="vertical" class="mx-2" />

    <NButton
      v-for="icon in icons2"
      :key="icon._id"
      :btn="`${icon.value ? 'soft-gray' : 'text-gray'} square`"
      icon
      :label="icon.name"
      @click="icon.value = !icon.value"
    />

    <NSeparator orientation="vertical" class="mx-2" />

    <NButton
      v-for="icon in icons3"
      :key="icon._id"
      :btn="`${icon.value ? 'soft-gray' : 'text-gray'} square`"
      icon
      :label="icon.name"
      @click="icon.value = !icon.value"
    />
  </div>
  <div flex="~ col">
    <NInput
      v-model="textarea"
      type="textarea"
      placeholder="Type something..."
    />

    <NSeparator class="my-10">
      <NAvatar src="/images/avatar.png" alt="Phojie Rengel" />
    </NSeparator>
  </div>
</template>
