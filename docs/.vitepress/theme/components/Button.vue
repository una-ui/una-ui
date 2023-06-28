<script setup lang="ts">
const buttons = [
  'btn-solid',
  'btn-solid-blue',
  'btn-solid-green',
  'btn-solid-yellow',
  'btn-outline',
  'btn-outline-blue',
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
  <div class="grid grid-cols-4 gap-2">
    <div
      v-for="button in buttons"
      :key="button"
      class="flex items-center justify-center"
    >
      <button
        :class="button"
      >
        {{ button }}
      </button>
    </div>
  </div>
</template>
