<script setup lang="ts">
const value = ref([40])

// eg. for multiple values
const multipleValue = ref([40, 60, 150])
</script>

<template>
  <div grid="~ cols-1" class="gap-8 py-4">
    <NSlider
      v-model="value"
      :min="0"
      :max="100"
    />

    <NSlider
      v-model="multipleValue"
      :min="0"
      :max="150"
    />
  </div>
</template>
