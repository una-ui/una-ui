<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <div class="flex gap-2">
    <NSwitch
      v-model:checked="enabled"
      size="lg"
      icon="i-heroicons-star-20-solid"
    />
    <NSwitch
      v-model:checked="enabled"
      size="lg"
      checked-icon="i-heroicons-sun-20-solid"
      unchecked-icon="i-heroicons-moon-20-solid"
    />
  </div>
</template>
