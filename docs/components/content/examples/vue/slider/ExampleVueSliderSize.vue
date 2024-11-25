<script setup lang="ts">
const models = ref([
  [20],
  [40],
  [60],
  [80],
  [100],
])
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <NSlider
      v-model="models[0]"
      size="sm"
    />

    <NSlider
      v-model="models[1]"
      size="md"
    />

    <NSlider
      v-model="models[2]"
      size="lg"
    />

    <NSlider
      v-model="models[3]"
      size="xl"
    />

    <NSlider
      v-model="models[4]"
      size="2xl"
    />
  </div>
</template>
