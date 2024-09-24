<script setup lang="ts">
const models = ref([
  [30],
  [40],
  [23],
  [49.40, 70],
  [10, 50],
  [29.40, 70],
  [90],
  [100],
  [50],
])
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <NSlider
      v-model="models[0]"
    />

    <NSlider
      v-model="models[1]"
      slider="lime"
    />

    <NSlider
      v-model="models[2]"
      slider="orange"
    />

    <NSlider
      v-model="models[3]"
      slider="pink"
    />

    <NSlider
      v-model="models[4]"
      slider="purple"
    />

    <NSlider
      v-model="models[5]"
      slider="error"
    />

    <NSlider
      v-model="models[6]"
      slider="info"
    />

    <NSlider
      v-model="models[7]"
      slider="teal"
    />
  </div>
</template>
