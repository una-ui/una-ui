<script setup lang="ts">
const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.'
</script>

<template>
  <div flex="~ col" space-y-4>
    <NAlert
      alert="outline-info"
      title="Info color"
      :description="description"
      icon
    />

    <NAlert
      alert="outline-success"
      title="Success color"
      :description="description"
      icon
    />

    <NAlert
      alert="outline-warning"
      title="Warning color"
      :description="description"
      icon
    />

    <NAlert
      alert="outline-error"
      title="Error color"
      :description="description"
      icon
    />

    <NAlert
      alert="soft-purple"
      title="Purple color"
      :description="description"
      icon="i-heroicons-shield-check-20-solid"
    />

    <NAlert
      alert="soft-lime"
      title="Lime color"
      :description="description"
      icon="i-heroicons-banknotes-20-solid"
    />

    <NAlert
      alert="soft-orange"
      title="Orange color"
      :description="description"
      icon="i-heroicons-face-smile-20-solid"
    />

    <NAlert
      alert="soft-sky"
      title="Sky color"
      :description="description"
      icon="i-heroicons-bolt-20-solid"
    />
  </div>
</template>
