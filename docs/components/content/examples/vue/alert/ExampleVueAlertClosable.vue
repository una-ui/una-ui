<script setup lang="ts">
const close = ref(false)

// auto close after 1 second
watch(close, (value) => {
  if (value) {
    setTimeout(() => {
      close.value = false
    }, 1000)
  }
})
</script>

<template>
  <NAlert
    v-if="!close"
    title="Attention needed"
    description="dLorem ipsum dolor sit amet consectetur adipisicing elit. aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
    closable
    @close="close = true"
  />
</template>
