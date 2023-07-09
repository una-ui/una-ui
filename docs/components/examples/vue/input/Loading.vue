<script setup lang="ts">
const value = ref('')
const loading = ref(false)
const typingTimer = ref<any>(null)
const typingDelay = 1000

function stopLoading() {
  loading.value = false
}

watch(value, () => {
  loading.value = true
  clearTimeout(typingTimer.value)
  typingTimer.value = setTimeout(stopLoading, typingDelay)
})
</script>

<template>
  <NVInput
    v-model="value"
    leading="i-carbon-search"
    :loading="loading"
    placeholder="Start typing..."
  />
</template>
