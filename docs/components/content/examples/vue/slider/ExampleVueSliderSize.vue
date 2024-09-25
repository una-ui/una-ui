<script setup lang="ts">
const models = ref([
  [30],
  [40],
  [23],
  [49.40, 70],
  [10, 50],
])
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <NSlider
      v-model="models[0]"
      size="xs"
    />

    <NSlider
      v-model="models[1]"
      switch="xl"
    />

    <NSlider
      v-model="models[2]"
      size="3vw"
      outset
    />

    <NSlider
      v-model="models[3]"
      size="1cm"
    />

    <NSlider
      v-model="models[4]"
      size="45px"
    />
  </div>
</template>
