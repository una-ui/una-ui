<script setup lang="ts">
const singleValue = ref([40])

const rangeValue = ref([40, 60, 150])
</script>

<template>
  <div class="grid cols-1 gap-8 py-4">
    <NSlider
      v-model="singleValue"
      :min="0"
      :max="100"
    />

    <NSlider
      v-model="rangeValue"
      :min="0"
      :max="150"
    />
  </div>
</template>
