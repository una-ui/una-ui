<script setup lang="ts">
import { ref } from 'vue'

const radio = ref('a')
</script>

<template>
  <div class="flex gap-4">
    <NRadio
      v-model="radio"
      value="a"
    />

    <NRadio
      v-model="radio"
      value="c"
    />
  </div>
</template>
