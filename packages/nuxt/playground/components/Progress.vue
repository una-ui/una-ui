<script setup lang="ts">
const progress = ref(13)

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => progress.value = 66, 500)
  cleanupFn(() => clearTimeout(timer))
})
</script>

<template>
  <NProgress v-model="progress" class="w-3/5" />
</template>
