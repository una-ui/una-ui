<script setup lang="ts">
const buttons = [
  'btn-solid',
  'btn-solid-purple',
  'btn-solid-green',
  'btn-solid-yellow',
  'btn-outline',
  'btn-outline-purple',
  'btn-outline-green',
  'btn-outline-yellow',
  // 'link-primary',
  // 'link-blue',
  // 'link-green',
  // 'link-yellow',
  // 'link-gray',
]
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
    <button
      v-for="button in buttons"
      :key="button"
      type="button"
      :class="button"
    >
      {{ button }}
    </button>
  </div>
</template>
