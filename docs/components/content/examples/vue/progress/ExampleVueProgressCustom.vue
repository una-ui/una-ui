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
      v-model="value"
      :una="{
        progressRoot: 'bg-gray-200 rounded-none h-3',
        progressIndicator: 'bg-blue-500 animate-pulse',
      }"
    />
  </div>
</template>
