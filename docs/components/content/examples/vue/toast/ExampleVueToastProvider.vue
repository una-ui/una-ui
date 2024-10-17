<script setup lang="ts">
const toast = useToast()
</script>

<template>
  <div class="grid h-28 place-items-center">
    <NButton
      label="Show toast"
      btn="solid-white"
      @click="toast.add(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          _toastProvider: {
            duration: 1000,
            swipeDirection: 'left',
          },
          closable: true,
        },
      )"
    />
  </div>
</template>
