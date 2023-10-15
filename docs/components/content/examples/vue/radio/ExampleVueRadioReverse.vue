<script setup lang="ts">
const radio = ref('a')

const choices = [
  { label: 'Radio A', value: 'a' },
  { label: 'Radio B', value: 'b' },
  { label: 'Radio C', value: 'c' },
]
</script>

<template>
  <div class="flex flex-wrap space-x-8">
    <NRadio
      v-for="choice in choices"
      :key="choice.value"
      v-bind="choice"
      v-model="radio"
      reverse
    />
  </div>
</template>
