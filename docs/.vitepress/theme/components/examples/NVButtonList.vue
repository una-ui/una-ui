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
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
    <button
      v-for="button in buttons"
      :key="button"
      type="button"
      :class="button"
    >
      Button text
      <!-- {{ button }} -->
    </button>

    <input
      type="type"
      input="outline lg"
      font-sans
      placeholder="Firstname"
    >
  </div>
</template>
