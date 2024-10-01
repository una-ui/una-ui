<script setup lang="ts">
const flavorText = [
  'Loading...',
  'Please wait...',
  'Just a moment...',
  'Almost there...',
  'Just a sec...',
  'Hold on...',
]

const { counter, reset, pause, resume, isActive } = useInterval(2500, {
  controls: true,
  immediate: false,
  callback(count) {
    if (count >= flavorText.length) {
      stop()
    }
  },
})

function stop() {
  pause()
  reset()
}
</script>

<template>
  <div>
    <NButton
      btn="solid-green"
      label="Start Task"
      leading="i-mdi:play"
      @click="resume()"
    />
  </div>
  <NDialog :open="isActive" :una="{ dialogClose: 'hidden!' }">
    <div class="flex gap-2">
      {{ flavorText[counter] }}
    </div>
    <NProgress indeterminate />
    <template #footer>
      <NButton
        btn="link-red"
        size="xs"
        label="stop"
        leading="i-mdi:stop"
        @click="stop()"
      />
    </template>
  </NDialog>
</template>
