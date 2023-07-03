<script setup lang="ts">
const buttons = [
  'btn-solid',
  'btn-solid-indigo',
  'btn-solid-green',
  'btn-solid-yellow',
  'btn-outline',
  'btn-outline-indigo',
  'btn-outline-green',
  'btn-outline-yellow',
  'btn-soft',
  'btn-soft-indigo',
  'btn-soft-green',
  'btn-soft-yellow',
  'btn-ghost',
  'btn-ghost-indigo',
  'btn-ghost-green',
  'btn-ghost-yellow',
  'btn-link',
  'btn-link-indigo',
  'btn-link-green',
  'btn-link-yellow',
]
</script>

<template>
  <div class="h-screen place-content-center container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2">
    <NButton
      v-for="button in buttons"
      :key="button"
      :class="button"
    >
      Button text
      <!-- {{ button }} -->
    </NButton>
  </div>
</template>
