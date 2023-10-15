<script setup lang="ts">
const radio = ref()
</script>

<template>
  <div class="flex gap-4">
    <NRadio
      v-model="radio"
      value="a"
      label="Disabled"
      disabled
    />

    <NRadio
      v-model="radio"
      value="b"
      label="Not disabled"
    />
  </div>
</template>
