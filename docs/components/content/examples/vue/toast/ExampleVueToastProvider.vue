<script setup lang="ts">
const { toast } = useToast()
</script>

<template>
  <div class="grid h-28 place-items-center">
    <NButton
      label="Show toast"
      btn="solid-white"
      @click="toast(
        {
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem with your request.',
          _toastProvider: {
            duration: 1000,
            swipeDirection: 'up',
          },
          closable: true,
        },
      )"
    />
  </div>
</template>
