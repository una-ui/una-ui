<script setup lang="ts">
const value = ref([40])
</script>

<template>
  <div grid="~ cols-1" class="gap-8 py-4">
    <NSlider
      v-model="value"
      slider="orange"
      :una="{
        sliderTrack: 'h-5',
        sliderThumb: 'border-3 rounded-none',
      }"
    />

    <NSlider
      v-model="value"
      slider="violet"
      :una="{
        sliderTrack: 'h-1',
        sliderThumb: 'border-3 h-8 rounded-lg',
      }"
    />
  </div>
</template>
