<script setup lang="ts">
import { ref } from 'vue'

const radio = ref('a')
</script>

<template>
  <div class="inline-flex gap-4">
    <NRadio
      v-model="radio"
      value="a"
      radio="red"
    />

    <NRadio
      v-model="radio"
      value="c"
      radio="green"
    />

    <NRadio
      v-model="radio"
      value="d"
    />
  </div>
</template>
