<script setup lang="ts">
const progress = ref(0)

const { pause } = useTimeoutPoll(fetchData, 100, { immediate: true })

async function fetchData() {
  if (progress.value === 100)
    return pause()

  progress.value++
}
</script>

<template>
  <NProgress
    v-model="progress"
  />
</template>
