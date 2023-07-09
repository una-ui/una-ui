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
  if (typingTimer.value.timer)
    clearTimeout(typingTimer.value.timer)
  typingTimer.value.timer = setTimeout(stopLoading, typingDelay)
})
</script>

<template>
  <div flex="~ col" space-y-4>
    <NVInput
      disabled
      loading
      placeholder="This is the disabled variant with loading indicator"
    />

    <NVInput
      v-model="value"
      leading="i-carbon-search"
      :loading="loading"
      placeholder="Start typing..."
    />
  </div>
</template>
