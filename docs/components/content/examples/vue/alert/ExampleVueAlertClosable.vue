<script setup lang="ts">
const close1 = ref(false)
const close2 = ref(false)

// auto reset if all alerts are closed
watch([close1, close2], () => {
  if (close1.value && close2.value) {
    setTimeout(() => {
      close1.value = false
      close2.value = false
    }, 1000)
  }
})
</script>

<template>
  <div flex="~ col" space-y-4>
    <NAlert
      v-if="!close1"
      title="Closable alert 1"
      closable
      @close="close1 = true"
    />

    <NAlert
      v-if="!close2"
      title="Closable alert 2"
      closable
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."
      @close="close2 = true"
    />
  </div>
</template>
