<script setup lang="ts">
const value = ref(30)

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => value.value = 60, 500)
  cleanupFn(() => clearTimeout(timer))

  const timer2 = setTimeout(() => value.value = 90, 1000)
  cleanupFn(() => clearTimeout(timer2))
})
</script>

<template>
  <div>
    <NProgress
      :model-value="5"
    />
  </div>
</template>
