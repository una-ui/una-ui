<script setup lang="ts">
import ToggleDark from './components/ToggleDark.vue'
</script>

<template>
  <div class="divide-y container py-25 space-y-4 mx-auto">
    <ToggleDark />
    <div>
      Buttons
      <div class="flex gap-2">
        <button class="btn-outline">
          btn-outline
        </button>

        <button class="btn-solid animate-pulse">
          btn-solid
        </button>
      </div>
    </div>
    <div>
      Inputs
      <div class="flex gap2">
        <input type="text" class="input-base">
      </div>
    </div>
  </div>
</template>
