<script setup lang="ts">
import Divider from './Divider.vue'

const buttons = [
  'btn-solid',
  'btn-solid-purple',
  'btn-solid-green',
  'btn-solid-yellow',
  'btn-outline',
  'btn-outline-purple',
  'btn-outline-green',
  'btn-outline-yellow',
  'btn-soft',
  'btn-soft-purple',
  'btn-soft-green',
  'btn-soft-yellow',
  'btn-ghost',
  'btn-ghost-purple',
  'btn-ghost-green',
  'btn-ghost-yellow',
  'btn-link',
  'btn-link-purple',
  'btn-link-green',
  'btn-link-yellow',
]
</script>

<template>
  <Divider title="Buttons">
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
  </Divider>
</template>
