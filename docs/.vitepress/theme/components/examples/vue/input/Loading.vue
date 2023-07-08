<script setup lang="ts">
import { ref, watch } from 'vue'

const value = ref('')
const loading = ref(false)
let typingTimer = null
const typingDelay = 1000

// Function to stop loading after typing is done
function stopLoading() {
  loading.value = false
}

watch(value, () => {
  loading.value = true
  clearTimeout(typingTimer)
  typingTimer = setTimeout(stopLoading, typingDelay)
})
</script>

<template>
  <NVInput
    v-model="value"
    input="outline"
    leading="i-carbon-search"
    :loading="loading"
    placeholder="Start typing..."
  />
</template>
