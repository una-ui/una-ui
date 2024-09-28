<script setup lang="ts">
const enabled = ref(false)
</script>

<template>
  <div class="flex gap-2">
    <NSwitch
      v-model:checked="enabled"
      icon="i-heroicons-star-20-solid"
    />
    <NSwitch
      v-model:checked="enabled"
      off-icon="i-heroicons-sun-20-solid"
      on-icon="i-heroicons-moon-20-solid"
    />
  </div>
</template>
