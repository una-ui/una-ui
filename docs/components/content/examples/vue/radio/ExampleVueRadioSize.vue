<script setup lang="ts">
import { ref } from 'vue'

const radio = ref('a')
</script>

<template>
  <div class="flex gap-4">
    <NRadio
      v-model="radio"
      value="a"
      size="1cm"
      label="1cm"
    />

    <NRadio
      v-model="radio"
      value="b"
      size="sm:2xl"
      label="sm:2xl"
    />

    <NRadio
      v-model="radio"
      value="c"
      size="10px"
      label="10px"
    />
  </div>
</template>
