<script setup lang="ts">
interface TypingTimer {
  timer: ReturnType<typeof setTimeout> | null
}

const value: Ref<string> = ref('')
const loading: Ref<boolean> = ref(false)
const typingTimer: Ref<TypingTimer> = ref({ timer: null })
const typingDelay = 1000

function stopLoading(): void {
  loading.value = false
}

watch(value, () => {
  loading.value = true
  clearTimeout(typingTimer.value.timer ?? undefined)
  typingTimer.value.timer = setTimeout(stopLoading, typingDelay)
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
