<script setup lang="ts">
const radio = ref('a')
</script>

<template>
  <div class="flex gap-4">
    <NRadio
      v-model="radio"
      value="a"
      label="Radio A"
    />

    <NRadio
      v-model="radio"
      value="b"
      label="Radio B"
    />

    <NRadio
      v-model="radio"
      value="c"
      label="Radio C"
    />
  </div>
</template>
